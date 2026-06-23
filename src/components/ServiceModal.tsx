import { ComponentType } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  Info,
  ShieldCheck,
  Award,
  Leaf,
  Briefcase,
  Zap,
  Cpu,
  Flame,
  Network,
  Globe,
  Wrench,
  Layers,
  Building2,
  Building
} from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const iconMap: Record<string, ComponentType<any>> = {
  ShieldCheck,
  Award,
  Leaf,
  Briefcase,
  Zap,
  Cpu,
  Flame,
  Network,
  Globe,
  Wrench,
  Layers,
  Building2,
  Building,
};

export function LucideIcon({ name, ...props }: { name: string; [key: string]: any }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return <Info {...props} />;
  return <IconComponent {...props} />;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-205">
      {/* Backdrop blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 shadow-2xl md:p-8 border border-neutral-150 z-10 my-8 animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Header with Icon */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-140">
            <LucideIcon name={service.iconName} size={24} />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-semibold">Our core services</span>
            <h3 className="font-display text-2xl font-bold text-neutral-900 leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 text-neutral-600 font-sans leading-relaxed">
          <p className="text-neutral-800 font-medium md:text-lg">
            {service.description}
          </p>
          <p>
            {service.detailedDescription}
          </p>
        </div>

        {/* Key Deliverables Bullet Points */}
        <div className="mt-6 pt-6 border-t border-neutral-100">
          <h4 className="font-display font-semibold text-neutral-900 mb-3">
            Key Scope of Deliverables:
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-600">
                <CheckCircle2 className="text-amber-600 shrink-0 mt-0.5" size={16} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-neutral-200 text-neutral-700 font-medium rounded-xl hover:bg-neutral-50 transition-colors text-sm cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              const formElement = document.getElementById('contact');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-5 py-2.5 bg-amber-600 text-white font-medium rounded-xl hover:bg-amber-700 transition-colors shadow-sm shadow-amber-600/20 text-sm flex items-center gap-1.5 cursor-pointer"
          >
            Inquire on this service
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
