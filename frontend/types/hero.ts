type type_button = "link" | "a";

export type HeroData = {
  header_title: string | null;
  title: string | null;
  content: string | null;
  button_message: string | null;
  button_redirection: string | null;
  type_button: type_button | null;
  dark_image: string | null;
  light_image: string | null;
  alt_image: string | null;
  include_icons: boolean | null;
};