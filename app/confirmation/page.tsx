"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Confirmation() {
  const router = useRouter();
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("checkoutData");
    if (data) {
      setOrderData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <button onClick={() => router.push("/")} className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo.webp"
                alt="Dwan Elevator Co."
                width={80}
                height={80}
                className="w-auto h-16"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Confirmation Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Order Received
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Thank you for choosing Dwan Elevator. Your {orderData?.plan || "maintenance"} plan request has been submitted.
            </p>
          </div>

          {/* Order Summary */}
          {orderData && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold mb-6 pb-4 border-b-2 border-[#EFBF04]">
                Order Summary
              </h2>

              {/* Plan */}
              <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-100">
                <p className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-1">Selected Plan</p>
                <p className="text-2xl font-heading font-bold text-gray-900">{orderData.plan}</p>
              </div>

              {/* Customer Info */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Customer Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Name</span>
                    <p className="font-semibold text-gray-900">{orderData.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Email</span>
                    <p className="font-semibold text-gray-900">{orderData.email}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone</span>
                    <p className="font-semibold text-gray-900">{orderData.phone}</p>
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Property Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="md:col-span-2">
                    <span className="text-gray-500">Address</span>
                    <p className="font-semibold text-gray-900">
                      {orderData.propertyAddress}
                      {orderData.propertyAddress2 && <><br />{orderData.propertyAddress2}</>}
                      <br />
                      {orderData.propertyCity}, {orderData.propertyState} {orderData.propertyZip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Elevator Info */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Elevator Details</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Number of Elevators</span>
                    <p className="font-semibold text-gray-900">{orderData.elevatorCount}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Manufacturer</span>
                    <p className="font-semibold text-gray-900">{orderData.manufacturer}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Year Installed</span>
                    <p className="font-semibold text-gray-900">{orderData.yearInstalled}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Type</span>
                    <p className="font-semibold text-gray-900">{orderData.elevatorType}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Number of Stops</span>
                    <p className="font-semibold text-gray-900">{orderData.numberOfStops}</p>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Payment</h3>
                <div className="text-sm">
                  <span className="text-gray-500">Card on File</span>
                  <p className="font-semibold text-gray-900">
                    •••• •••• •••• {orderData.cardNumber?.slice(-4) || "****"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold mb-6 pb-4 border-b-2 border-[#EFBF04]">
              What Happens Next
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Order Confirmation</h3>
                  <p className="text-gray-600">You'll receive an email confirmation with your order details shortly.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Specialist Contact Within 24 Hours</h3>
                  <p className="text-gray-600">A Dwan Elevator specialist will call to review your elevator details and schedule your first service visit.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Initial On-Site Inspection</h3>
                  <p className="text-gray-600">Our certified technician will perform a comprehensive inspection of your elevator equipment and document current conditions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Service Begins</h3>
                  <p className="text-gray-600">Your maintenance plan activates immediately. Your first invoice is Net-30 — no upfront payment required.</p>
                </div>
              </div>
            </div>
          </div>

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
          <p className="font-bold text-sm tracking-[0.15em] mb-1">DWAN ELEVATOR CO.</p>
          <p className="text-xs text-gray-500 mb-4">Serving California Since 1919</p>
          <p className="text-xs text-gray-600">© 2026 Dwan Elevator Company</p>
        </div>
      </footer>
    </div>
  );
}
