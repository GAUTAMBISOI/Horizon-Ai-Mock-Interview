import { Factory, FileBadge, InspectionPanel, X } from "lucide-react"; // Import Lucide icons
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:${hoverColor}`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:underline text-gray-300 hover:text-gray-100"
      >
        {children}
      </Link>
    </li>
  );
};

export const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-300 hover:text-gray-100 py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column: Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Second Column: About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Me</h3>
            <p>
              I am Gautam bisoi, i btech cse graduate
            </p>
          </div>

          {/* Third Column: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul>
              <FooterLink to="/services/interview-prep">
                We can offer Full Stack Services
              </FooterLink>
              <FooterLink to="/services/career-coaching">by</FooterLink>
              <FooterLink to="/services/resume-building">
                Currently working as an Intern 
              </FooterLink>
            </ul>
          </div>

          {/* Fourth Column: Address and Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="mb-4"> Dehradun, 248171</p>
            <div className="flex gap-4">
              <SocialLink
                href="https://www.facebook.com/gautam.bisoi.77"
                icon={<FileBadge size={24} />}
                hoverColor="text-blue-500"
              />
              <SocialLink
                href="https://twitter.com"
                icon={<X size={26} />}
                hoverColor="text-blue-400 "
              />
              <SocialLink
                href="https://www.instagram.com/gautam_bisoi/"
                icon={<InspectionPanel size={24} />}
                hoverColor="text-pink-500"
              />
              <SocialLink
                href="https://www.linkedin.com/in/gautam-bisoi-938733248/"
                icon={<Factory size={24} />}
                hoverColor="text-blue-700"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
