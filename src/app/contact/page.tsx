"use client";
import Circles from "@/components/circles";
import { ContactForm, ContactText } from "@/components/contact";

const page = () => {
  return (
    <>
      <div className="h-full bg-primary/30">
        <div className="container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left">
          {/* text & form */}
          <div className="flex w-full max-w-[700px] flex-col">
            {/* text */}
            <ContactText />
            {/* form */}
            <ContactForm />
          </div>
        </div>
        <Circles />
      </div>
    </>
  );
};

export default page;
