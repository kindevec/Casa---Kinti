import React, { useState } from 'react';
import { CONTACT_INFO, WHATSAPP_PHONE } from '../data';
import { ContactFormData } from '../types';
import { CasaKintiLogo, ButterflyGraphic, FloralBouquet, HeroOrganicBackdrop } from './FloralDecorations';
import { MapPin, Clock, Phone, Send, CheckCircle2, MessageCircle, Instagram, Facebook, Calendar, Sparkles, Heart } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceOfInterest: '',
    tentativeDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    /* 
      ========================================================================
      CONEXIÓN CON BACKEND / SERVICIOS EXTERNOS (Formspree, EmailJS, etc.)
      Para conectar con Formspree en producción:
      fetch("https://formspree.io/f/TU_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      ========================================================================
    */

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const sendViaWhatsApp = () => {
    const text = `Hola Casa Kinti, me gustaría agendar una cita.%0A%0A*Nombre:* ${formData.fullName}%0A*Teléfono:* ${formData.phone}%0A*Servicio de interés:* ${formData.serviceOfInterest || 'Consulta General'}%0A*Fecha tentativa:* ${formData.tentativeDate || 'Flexible'}%0A*Mensaje:* ${formData.message || 'Sin mensaje adicional'}`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceOfInterest: '',
      tentativeDate: '',
      message: '',
    });
  };

  return (
    <section id="contacto" className="relative pt-12 pb-8 overflow-hidden">
      
      {/* ========================================================
          CTA FINAL CON MARCO FLORAL (TRANSICIÓN DE ENTRADA)
         ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#C9D4F5] via-[#FFFFFF] to-[#DCEEFB] p-10 sm:p-14 text-center shadow-lg border border-[#9B8FD9]/40 overflow-hidden">
          
          <FloralBouquet className="absolute top-0 left-0 w-36 h-36 opacity-70" />
          <FloralBouquet className="absolute bottom-0 right-0 w-36 h-36 opacity-70" flip />
          <ButterflyGraphic className="absolute top-4 right-16" size={40} color="purple" />
          <ButterflyGraphic className="absolute bottom-4 left-16" size={32} color="pink" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7FD1]">
              DA EL PRIMER PASO HOY
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#3E4A7A]">
              Tu bienestar{' '}
              <span className="font-script text-[#9B8FD9] text-5xl sm:text-6xl font-normal block sm:inline">
                comienza ahora
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#3E4A7A]/80 font-normal leading-relaxed">
              Permítenos acompañarte en un viaje de equilibrio, claridad y desarrollo. Estamos listos para recibirte en nuestro santuario de sanación o de forma virtual.
            </p>

            <div className="pt-2">
              <a
                href="#booking-form"
                className="inline-flex items-center gap-2 bg-[#6B7FD1] hover:bg-[#9B8FD9] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Completar Formulario de Reserva</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          FORMULARIO DE CONTACTO + INFORMACIÓN Y MAPA
         ======================================================== */}
      <div id="booking-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Formulario */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-[#C9D4F5] relative">
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#3E4A7A] mb-2">
              Agenda tu Sesión o Consulta
            </h3>
            <p className="text-xs sm:text-sm text-[#3E4A7A]/75 mb-6">
              Llena tus datos y te responderemos a la brevedad para confirmar la disponibilidad y modalidad.
            </p>

            {isSuccess ? (
              <div className="p-8 rounded-2xl bg-[#DCEEFB]/60 border border-[#9B8FD9]/40 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[#12A89D] text-white flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif-display text-2xl font-bold text-[#3E4A7A]">
                  ¡Solicitud Recibida con Éxito!
                </h4>
                <p className="text-xs sm:text-sm text-[#3E4A7A]/80 max-w-md mx-auto">
                  Gracias por comunicarte con Casa Kinti. Johanna se pondrá en contacto contigo muy pronto a través de WhatsApp o correo electrónico.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={sendViaWhatsApp}
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar también por WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-[#6B7FD1] font-semibold underline hover:text-[#9B8FD9]"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Nombre Completo */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4A7A] mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ej. María Fernanda Morales"
                      className="w-full px-4 py-3 rounded-xl border border-[#C9D4F5] bg-white text-[#3E4A7A] text-sm focus:outline-hidden focus:border-[#9B8FD9] focus:ring-2 focus:ring-[#9B8FD9]/20 transition-all placeholder:text-[#3E4A7A]/40"
                    />
                  </div>

                  {/* Teléfono / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4A7A] mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej. +593 99 123 4567"
                      className="w-full px-4 py-3 rounded-xl border border-[#C9D4F5] bg-white text-[#3E4A7A] text-sm focus:outline-hidden focus:border-[#9B8FD9] focus:ring-2 focus:ring-[#9B8FD9]/20 transition-all placeholder:text-[#3E4A7A]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Correo Electrónico */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4A7A] mb-1.5">
                      Correo Electrónico (Opcional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#C9D4F5] bg-white text-[#3E4A7A] text-sm focus:outline-hidden focus:border-[#9B8FD9] focus:ring-2 focus:ring-[#9B8FD9]/20 transition-all placeholder:text-[#3E4A7A]/40"
                    />
                  </div>

                  {/* Fecha tentativa */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4A7A] mb-1.5">
                      Fecha Tentativa
                    </label>
                    <input
                      type="date"
                      name="tentativeDate"
                      value={formData.tentativeDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9D4F5] bg-white text-[#3E4A7A] text-sm focus:outline-hidden focus:border-[#9B8FD9] focus:ring-2 focus:ring-[#9B8FD9]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Servicio o producto de interés con <optgroup> */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4A7A] mb-1.5">
                    Servicio o Producto de Interés *
                  </label>
                  <select
                    name="serviceOfInterest"
                    required
                    value={formData.serviceOfInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#C9D4F5] bg-white text-[#3E4A7A] text-sm focus:outline-hidden focus:border-[#9B8FD9] focus:ring-2 focus:ring-[#9B8FD9]/20 transition-all"
                  >
                    <option value="">Selecciona una opción...</option>
                    
                    <optgroup label="🌿 Nicho 1: Medicina Ancestral y Productos">
                      <option value="Limpias y Medicina Ancestral ($25+)">Limpias y Medicina Ancestral (desde $25.00)</option>
                      <option value="Terapia con Flores de Bach ($30)">Terapia con Flores de Bach ($30.00)</option>
                      <option value="Herbolaria Ancestral ($20)">Herbolaria Ancestral ($20.00)</option>
                      <option value="Lectura Tarot Terapéutico Promo ($15)">Lectura de Tarot Terapéutico — Promo ($15.00)</option>
                      <option value="Pulseras Amuletos Personalizadas ($22)">Pulseras Amuletos Personalizadas con Estudio Radiestésico ($22.00)</option>
                      <option value="Kit de Limpieza Energética ($28)">Kit de Limpieza Energética ($28.00)</option>
                      <option value="Aceite Esencial / Inciensos / Cristales">Otros productos (Aceites, Inciensos, Cristales)</option>
                    </optgroup>

                    <optgroup label="📚 Nicho 2: Educación Infantil y Aprendizaje">
                      <option value="Asesoría en Problemas de Aprendizaje ($35)">Asesoría en Problemas de Aprendizaje ($35.00)</option>
                      <option value="Talleres de Educación Bilingüe Infantil ($18/sesión)">Talleres de Educación Bilingüe Infantil ($18.00)</option>
                      <option value="Evaluación Psicopedagógica Inicial ($40)">Evaluación Psicopedagógica Inicial ($40.00)</option>
                    </optgroup>
                  </select>
                </div>

                {/* Mensaje o Comentarios */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4A7A] mb-1.5">
                    Cuéntanos tu motivo de consulta
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe brevemente tus síntomas, motivo de consulta para ti o tu pequeño..."
                    className="w-full px-4 py-3 rounded-xl border border-[#C9D4F5] bg-white text-[#3E4A7A] text-sm focus:outline-hidden focus:border-[#9B8FD9] focus:ring-2 focus:ring-[#9B8FD9]/20 transition-all placeholder:text-[#3E4A7A]/40"
                  />
                </div>

                {/* Botón Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#6B7FD1] hover:bg-[#9B8FD9] text-white text-base font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-70 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Enviando solicitud...' : 'Enviar Solicitud de Cita'}</span>
                </button>

                <p className="text-[11px] text-[#3E4A7A]/60 text-center">
                  Tus datos son 100% privados y confidenciales.
                </p>
              </form>
            )}
          </div>

          {/* Columna Información de Contacto + Mapa */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white/90 rounded-3xl p-8 shadow-md border border-[#C9D4F5] space-y-6">
              <h4 className="font-serif-display text-2xl font-bold text-[#3E4A7A]">
                Información de Casa Kinti
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-[#3E4A7A]">
                
                {/* Dirección */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DCEEFB] text-[#6B7FD1] flex items-center justify-center shrink-0 border border-[#9B8FD9]/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#3E4A7A] font-bold">Ubicación:</strong>
                    <span>{CONTACT_INFO.address}</span>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DCEEFB] text-[#9B8FD9] flex items-center justify-center shrink-0 border border-[#9B8FD9]/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#3E4A7A] font-bold">Horarios de Atención:</strong>
                    <span>{CONTACT_INFO.hours}</span>
                  </div>
                </div>

                {/* WhatsApp Directo */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DCEEFB] text-[#12A89D] flex items-center justify-center shrink-0 border border-[#9B8FD9]/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#3E4A7A] font-bold">WhatsApp Directo:</strong>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6B7FD1] font-semibold hover:underline"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>

              {/* Redes Sociales con Enlaces y Logos Oficiales */}
              <div className="pt-4 border-t border-[#C9D4F5]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7FD1] block mb-3">
                  Síguenos en Redes Sociales:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={CONTACT_INFO.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full overflow-hidden hover:scale-115 hover:shadow-md transition-all duration-200 active:scale-95"
                    aria-label="TikTok Casa Kinti"
                  >
                    <img src="/icons/tiktok.png" alt="TikTok" className="w-full h-full object-cover" />
                  </a>

                  <a
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full overflow-hidden hover:scale-115 hover:shadow-md transition-all duration-200 active:scale-95"
                    aria-label="Instagram Casa Kinti"
                  >
                    <img src="/icons/instagram.png" alt="Instagram" className="w-full h-full object-cover" />
                  </a>

                  <a
                    href={CONTACT_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full overflow-hidden hover:scale-115 hover:shadow-md transition-all duration-200 active:scale-95"
                    aria-label="Facebook Casa Kinti"
                  >
                    <img src="/icons/facebook.png" alt="Facebook" className="w-full h-full object-cover" />
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Casa Kinti, me gustaría información.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full overflow-hidden hover:scale-115 hover:shadow-md transition-all duration-200 active:scale-95"
                    aria-label="WhatsApp Casa Kinti"
                  >
                    <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-full h-full object-cover" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa Embebido de Quito */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-[#C9D4F5] h-52 relative">
              <iframe
                title="Ubicación Casa Kinti Quito Ecuador"
                src={CONTACT_INFO.googleMapsEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================
          FOOTER PRINCIPAL (Con silueta orgánica delimitada y mariposas en movimiento)
         ======================================================== */}
      <footer className="relative z-10 border-t border-[#C9D4F5]/60 bg-gradient-to-br from-[#DCEEFB] via-[#E7F3FC] to-[#F0C6D9]/40 pt-16 pb-10 overflow-hidden shadow-xs">
        {/* Silueta orgánica curva multicapa delimitada idéntica al banner */}
        <HeroOrganicBackdrop className="-z-5 opacity-90" />

        {/* Mariposas en movimiento y aleteo continuo por el Footer */}
        <ButterflyGraphic className="absolute top-6 left-[6%] opacity-85" size={40} color="purple" />
        <ButterflyGraphic className="absolute bottom-10 left-[20%] opacity-80" size={32} color="pink" />
        <ButterflyGraphic className="absolute top-8 right-[14%] opacity-90" size={36} color="blue" />
        <ButterflyGraphic className="absolute bottom-6 right-[6%] opacity-85" size={34} color="lavender" />
        <ButterflyGraphic className="absolute top-1/2 left-[38%] opacity-75" size={28} color="purple" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Logo Oficial en su ubicación original a la izquierda */}
          <div className="flex justify-start items-center pb-8 border-b border-[#C9D4F5]/60">
            <CasaKintiLogo size="lg" />
          </div>

          {/* Fila Inferior con Derechos Reservados en su ubicación original a la izquierda */}
          <div className="pt-6 text-left text-xs text-[#3E4A7A]/75">
            <p>
              © {new Date().getFullYear()} Casa Kinti — Medicinas Integrativas. Quito, Ecuador. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </footer>

    </section>
  );
};
