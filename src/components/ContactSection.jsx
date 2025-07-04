import { Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
    return (<section id="Contact" className="py-24 px-4 relati bg-secondary/30">
                <div className="container mx-auto max-w-5l">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Get In <span className="text-primary"> Touch </span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Open to Opportunities.
                    </p>

<div className="flex justify-center">
  <div className="space-y-8 text-center">
    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

    <div className="space-y-6">
      {/* Email */}
      <div className="flex items-center justify-center space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left w-72">
          <h4 className="font-medium mb-1">Email</h4>
          <p className="text-muted-foreground break-all">dharshinijeyamurugan@gmail.com</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center justify-center space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left w-72">
          <h4 className="font-medium mb-1">Location</h4>
          <p className="text-muted-foreground">Madurai, TamilNadu, India.</p>
        </div>
      </div>
    </div>
  </div>
</div>

                </div>
            </section>
            );
};