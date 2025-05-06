
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  isAvailableSoon?: boolean;
  className?: string;
  imageSrc?: string;
}

const ServiceCard = ({
  title,
  description,
  isAvailableSoon = false,
  className,
  imageSrc,
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md transition-all border overflow-hidden",
      isAvailableSoon ? "border-amber-200" : "border-hospital-100",
      className
    )}>
      {imageSrc && (
        <div className="h-40 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";
              console.log(`Failed to load image for ${title}, using fallback`);
            }}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        {isAvailableSoon && (
          <div className="mt-3 inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
            Available before 2026
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
