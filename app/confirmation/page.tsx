"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";

export default function Confirmation() {
  const router = useRouter();
  const [customerData, setCustomerData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("customerInfo");
    if (data) {
      setCustomerData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Image
              src="/images/logo.webp"
              alt="Dwan Elevator Co."
              width={80}
              height={80}
              className="w-auto h-16"
            />
          </div>
        </div>
      </header>

      {/* Confirmation Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#EFBF04] rounded-full mb-6">
              <CheckCircle2 className="w-12 h-12 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600">
              We've received your request for a free maintenance assessment.
            </p>
          </div>

          {/* Confirmation Details */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold mb-6 pb-4 border-b">
              What Happens Next
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">We'll Review Your Information</h3>
                  <p className="text-gray-600">Our team will assess your elevator maintenance needs based on the information you provided.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">We'll Contact You Within 24 Hours</h3>
                  <p className="text-gray-600">A Dwan Elevator specialist will reach out to schedule your free on-site assessment.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Free On-Site Assessment</h3>
                  <p className="text-gray-600">Our technician will inspect your elevators and provide a comprehensive maintenance plan.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Start Your Free Year</h3>
                  <p className="text-gray-600">Once approved, your first 12 months of full-service maintenance is completely free.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Info Summary */}
          {customerData && (
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Your Information</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Name:</span>
                  <p className="font-semibold">{customerData.name}</p>
                </div>
                <div>
                  <span className="text-gray-600">Company:</span>
                  <p className="font-semibold">{customerData.company}</p>
                </div>
                <div>
                  <span className="text-gray-600">Email:</span>
                  <p className="font-semibold">{customerData.email}</p>
                </div>
                <div>
                  <span className="text-gray-600">Phone:</span>
                  <p className="font-semibold">{customerData.phone}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-gray-600">Building Address:</span>
                  <p className="font-semibold">
                    {customerData.addressLine1}
                    {customerData.addressLine2 && <><br />{customerData.addressLine2}</>}
                    <br />
                    {customerData.city}, {customerData.state} {customerData.zip}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Info */}
          <div className="bg-black text-white rounded-lg p-8 text-center">
            <h3 className="text-xl font-heading font-bold mb-4 text-[#EFBF04]">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-300 mb-6">
              If you have an elevator emergency or need to speak with someone right away, please contact us directly.
            </p>
            <div className="flex justify-center">
              <a
                href="tel:4154651672"
                className="flex items-center justify-center gap-2 bg-[#EFBF04] text-black font-semibold px-6 py-3 rounded-[3px] hover:bg-[#EFBF04]/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(415) 465-1672</span>
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              size="lg"
              className="font-semibold"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Dwan Elevator Company</p>
        </div>
      </footer>
    </div>
  );
}
