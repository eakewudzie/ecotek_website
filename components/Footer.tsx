import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl text-primary">Ecotek</span>
            </div>
            <p className="text-sm text-slate-400">
              Building tomorrow&apos;s architecture with innovation and quality.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+233240278435</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@ecotek.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-1 text-sm text-slate-400">
              <div>Commercial Construction</div>
              <div>Residential Projects</div>
              <div>Architectural Design</div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-6 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Ecotek Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 