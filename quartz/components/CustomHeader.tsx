import { QuartzComponentConstructor } from "./types"

export default (() => {
  function CustomHeader() {
    return (
      <header class="al-site-header">
        <div class="al-logo-wrap">
          <a href="/" class="al-logo" aria-label="The Salon home">
            The Salon
          </a>
        </div>

        <nav class="al-main-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/read/">Read</a>
          <a href="/questions/">Questions</a>
		  <a href="/about-the-salon/">About the Salon</a>
        </nav>
      </header>
    )
  }

  return CustomHeader
}) satisfies QuartzComponentConstructor
