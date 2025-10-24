import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link to="/" className="flex items-center hover:text-foreground transition-colors" itemProp="item">
            <Home className="w-4 h-4" />
            <meta itemProp="name" content="Home" />
            <meta itemProp="position" content="1" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <ChevronRight className="w-4 h-4 mx-2" />
            {item.href ? (
              <Link to={item.href} className="hover:text-foreground transition-colors" itemProp="item">
                <span itemProp="name">{item.label}</span>
                <meta itemProp="position" content={String(index + 2)} />
              </Link>
            ) : (
              <>
                <span itemProp="name">{item.label}</span>
                <meta itemProp="position" content={String(index + 2)} />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
