"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function RepairConfirmation() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("repairData");
    if (stored) setData(JSON.parse(stored));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <button onClick={() => router.push("/")} className="hover:opacity-80 transition-opacity">
              <Image src="/images/logo.webp" alt="Dwan Elevator Co." width={80} height={80} className="w-auto h-12" />
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-14">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">
              Repair Visit Requested
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              A Dwan technician will be in touch to schedule your repair visit.
            </p>
          </div>

          {/* Summary */}
          {data && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
              <h2 className="text-xl font-heading font-bold mb-5 pb-3 border-b-2 border-[#EFBF04]">
                Repair Summary
              </h2>

              <div className="bg-gray-900 text-white rounded-lg p-5 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Problem</p>
                    <p className="text-lg font-bold">{data.problem}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Estimated Cost</p>
                    <p className="text-lg font-bold text-[#EFBF04]">{data.problemRange}</p>
                  </div>
                </div>
                {data.otherDescription && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-sm text-gray-300">{data.otherDescription}</p>
                  </div>
                )}
              </div>

              {/* Elevator Info */}
              {(data.elevatorInfo?.manufacturer || data.elevatorInfo?.type || data.elevatorInfo?.yearInstalled || data.elevatorInfo?.stops) && (
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Elevator Details</h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    {data.elevatorInfo.manufacturer && (
                      <div>
                        <span className="text-gray-400 text-xs">Manufacturer</span>
                        <p className="font-semibold text-gray-900">{data.elevatorInfo.manufacturer}</p>
                      </div>
                    )}
                    {data.elevatorInfo.yearInstalled && (
                      <div>
                        <span className="text-gray-400 text-xs">Year Installed</span>
                        <p className="font-semibold text-gray-900">{data.elevatorInfo.yearInstalled}</p>
                      </div>
                    )}
                    {data.elevatorInfo.type && (
                      <div>
                        <span className="text-gray-400 text-xs">Type</span>
                        <p className="font-semibold text-gray-900">{data.elevatorInfo.type}</p>
                      </div>
                    )}
                    {data.elevatorInfo.stops && (
                      <div>
                        <span className="text-gray-400 text-xs">Stops</span>
                        <p className="font-semibold text-gray-900">{data.elevatorInfo.stops}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Contact */}
              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Contact Information</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs">Name</span>
                    <p className="font-semibold text-gray-900">{data.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs">Email</span>
                    <p className="font-semibold text-gray-900">{data.email}</p>
                  </div>
                  {data.phone && (
                    <div>
                      <span className="text-gray-400 text-xs">Phone</span>
                      <p className="font-semibold text-gray-900">{data.phone}</p>
                    </div>
                  )}
                  <div className="sm:col-span-2">
                    <span className="text-gray-400 text-xs">Address</span>
                    <p className="font-semibold text-gray-900">{data.address}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact */}
          <div className="bg-gray-900 text-white rounded-xl p-6 text-center mb-6">
            <h3 className="font-bold mb-2 text-[#EFBF04]">Need Immediate Help?</h3>
            <p className="text-gray-400 text-sm mb-4">Call us directly for emergency repairs.</p>
            <a href="tel:4154651672" className="inline-flex items-center gap-2 bg-[#EFBF04] text-black font-semibold px-5 py-2.5 rounded-[3px] hover:bg-[#EFBF04]/90 transition-colors text-sm">
              <Phone className="w-4 h-4" />
              <span>(415) 465-1672</span>
            </a>
          </div>

          <div className="text-center">
            <Button onClick={() => router.push("/")} variant="outline" size="lg" className="font-semibold">
              Return to Home
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-sm tracking-[0.15em] text-gray-700 mb-0.5">DWAN ELEVATOR CO.</p>
          <p className="text-xs text-gray-400">Serving California Since 1919 · © 2026 Dwan Elevator Company</p>
        </div>
      </footer>
    </div>
  );
}
