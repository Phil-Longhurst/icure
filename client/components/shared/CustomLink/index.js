import Link from 'next/link';

const CustomLink = ({ label, href, locale, target, isChild, hasChildren  }) => {
  if (hasChildren) {
    return (
      <Link href={href} className="hasChildren">
        <a target={target}>{label}</a>
      </Link>
    );
  } else {
    return (
      <Link href={href}>
        <a target={target}>{label}</a>
      </Link>
    );
  }
};

CustomLink.defaultProps = {};

export default CustomLink;
