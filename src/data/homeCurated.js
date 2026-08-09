/**
 * Home page curation -- the single place to decide what appears on the
 * landing page. Components only read from this module, so curating the
 * next season means editing this file, not any component.
 *
 * `heroArtwork` drives The Opening: the single approved hero artwork.
 *
 *   - src   : public asset path (copied verbatim, never modified)
 *   - ratio : natural aspect ratio, kept exact so the image is never cropped
 *
 * `featuredWork` drives the Featured Exhibition: one uploaded poster only.
 * The poster carries all exhibition information (title, artist, medium,
 * year, description), so this entry deliberately holds just the image and
 * an optional gallery link. Replacing the exhibition = replacing the image.
 */
export const heroArtwork = {
  src: `${import.meta.env.BASE_URL}hero-artwork.png`,
  alt: 'Hero artwork — an original student piece for the Fine Arts Club of Puducherry Technological University.',
  ratio: '1356/768',
}

export const featuredWork = {
  src: `${import.meta.env.BASE_URL}featured-artwork.png`,
  ratio: '1356/768',
  link: '/gallery',
}