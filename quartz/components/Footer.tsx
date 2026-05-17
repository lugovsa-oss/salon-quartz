import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>© Alex Lugovskoy</p>

        <p>
          Materials may be used for non-commercial educational purposes with
          attribution and a link to the source.
        </p>

        <p>Commercial use and AI/dataset use require permission.</p>

        <p>
  <a href="/license/">License</a> ·{" "}
  <a href="/contact/">Contact</a>
</p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor