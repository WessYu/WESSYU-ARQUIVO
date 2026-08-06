(() => {
  const parts = Array.from(
    { length: 8 },
    (_, index) => `/cv/Wesley_Cruz_CV_PT.gz.part${index}`,
  )

  async function getResumeBlob() {
    if (!('DecompressionStream' in window)) {
      throw new Error('DecompressionStream indisponível')
    }

    const chunks = await Promise.all(
      parts.map(async (path) => {
        const response = await fetch(path, { cache: 'force-cache' })
        if (!response.ok) throw new Error(`Falha ao carregar ${path}`)
        return response.text()
      }),
    )

    const binary = atob(chunks.join('').replace(/\s/g, ''))
    const compressed = new Uint8Array(binary.length)

    for (let index = 0; index < binary.length; index += 1) {
      compressed[index] = binary.charCodeAt(index)
    }

    const stream = new Blob([compressed])
      .stream()
      .pipeThrough(new DecompressionStream('gzip'))

    return new Blob([await new Response(stream).arrayBuffer()], {
      type: 'application/pdf',
    })
  }

  async function downloadResume() {
    const blob = await getResumeBlob()
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'Curriculo_Wesley_Cruz_FrontEnd_2026.pdf'
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000)
  }

  document.addEventListener('click', (event) => {
    const target = event.target
    const link =
      target instanceof Element
        ? target.closest('a[href="/Wesley_Cruz_CV_PT.pdf"]')
        : null

    if (!link) return

    event.preventDefault()
    link.setAttribute('aria-busy', 'true')

    downloadResume()
      .catch(() => {
        window.location.href = '/Wesley_Cruz_CV_PT.pdf'
      })
      .finally(() => {
        link.removeAttribute('aria-busy')
      })
  })
})()
