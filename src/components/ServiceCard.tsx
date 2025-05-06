
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  isAvailableSoon?: boolean;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  isAvailableSoon = false,
  className,
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-md transition-all border",
      isAvailableSoon ? "border-amber-200" : "border-hospital-100",
      className
    )}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      {isAvailableSoon && (
        <div className="mt-3 inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
          Available before 2026
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
