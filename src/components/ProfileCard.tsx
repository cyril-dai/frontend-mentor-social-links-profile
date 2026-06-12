export type SocialLink = {
  name: string;
  url: string;
};

export type User = {
  thumbnail: string;
  fullname: string;
  country: string;
  city: string;
  title: string;
  socialLinks: SocialLink[];
};

type Props = User & React.HTMLAttributes<HTMLElement>;

export default function ProfileCard({
  thumbnail,
  fullname,
  country,
  city,
  title,
  socialLinks,
  ...props
}: Props) {
  return (
    <article
      className="flex flex-col items-center gap-6 rounded-xl bg-(--grey-800) p-10 text-center"
      {...props}
    >
      <img src={thumbnail} alt="Avatar" className="size-22 rounded-full" />
      <div className="flex flex-col gap-1">
        <span className="text-2xl">{fullname}</span>
        <span className="text-sm text-(--green)">{`${city}, ${country}`}</span>
      </div>
      <span className="text-sm text-gray-300">{`"${title}"`}</span>
      {socialLinks && (
        <nav aria-label="Social links" className="w-full">
          <ul className="flex flex-col gap-4">
            {socialLinks.map(({ name, url }) => (
              <li key={name}>
                <a
                  href={url}
                  className="flex h-10 items-center justify-center rounded-lg bg-(--grey-700) text-sm font-bold duration-300 hover:bg-(--green) hover:text-(--grey-900) focus:bg-(--green) focus:text-(--grey-900)"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </article>
  );
}
