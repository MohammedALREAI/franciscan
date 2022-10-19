
import Link from "next/link";

export const LitsItem = ({item}) => {
  return (
    <li>
      <Link prefetch href={`/${item}`}>
        <a>{item}</a>
      </Link>
    </li>
  );
}
