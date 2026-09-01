import React, { useState, useEffect } from 'react';
import { useNicheMode } from '../context/NicheContext';
import { CONTACT_INFO, WHATSAPP_PHONE } from '../data';
import { ContactFormData } from '../types';
import { CasaKintiLogo, ButterflyGraphic, FloralBouquet, HeroOrganicBackdrop, AgendarCalendarIcon, SolicitarEvaluacionIcon } from './FloralDecorations';
import { MapPin, Clock, Phone, Send, CheckCircle2, MessageCircle, Instagram, Facebook, Calendar, Sparkles, Heart, BookOpen, GraduationCap } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { mode } = useNicheMode();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceOfInterest: '',
    tentativeDate: '',
    message: '',
  });

  // Resetear el servicio seleccionado al cambiar de nicho
  useEffect(() => {
    setFormData((prev) => ({ ...prev, serviceOfInterest: '' }));
  }, [mode]);

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
    <section id="contacto" className="relative pt-14 sm:pt-20 md:pt-24 pb-16 sm:pb-24 overflow-hidden text-white transition-colors duration-500">
      {/* ========================================================
          FOTOGRAFÍA CELESTIAL HORIZONTAL DE FONDO (COLOR DEL HEADER)
         ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#4AAEA5] via-[#5CBDB5] to-[#3E9C93] pointer-events-none">
        <img
          src="/hero-celestial-bg.jpg"
          alt="Cielo Celestial Turquesa y Polvo Dorado Casa Kinti"
          className="w-full h-full object-cover object-center filter brightness-[1.12] contrast-[1.04] opacity-75 mix-blend-screen scale-100 pointer-events-none"
        />
        {/* Velo turquesa luminoso del header y gradientes de realce */}
        <div className="absolute inset-0 bg-[#5CBDB5]/40 mix-blend-color pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3E9C93]/50 via-transparent to-[#3E9C93]/60 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FFF8D6]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] rounded-full bg-[#FFEA79]/20 blur-3xl pointer-events-none" />
      </div>

      {/* Destellos y polvo estelar dorado */}
      <div className="absolute inset-0 pointer-events-none opacity-25 -z-5">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <circle cx="150" cy="180" r="2" fill="#FFD700" />
          <circle cx="650" cy="240" r="1.6" fill="#FFFFFF" />
          <circle cx="1150" cy="160" r="2.2" fill="#FFF5C0" />
          <circle cx="900" cy="500" r="1.8" fill="#FFEA79" />
        </svg>
      </div>

      {/* ========================================================
          CABECERA PRINCIPAL DE CONTACTO (Estilo Luxe Turquesa & Oro)
         ======================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative mb-12 sm:mb-16 md:mb-20">
        <div key={mode + '-contact-header'} className="space-y-4 relative z-10 animate-in fade-in duration-300">
          <span className="text-[11px] sm:text-xs font-serif tracking-[0.24em] text-[#FFD700] uppercase font-bold drop-shadow-xs block">
            ✦ RESERVAS & ASESORÍA PERSONALIZADA ✦
          </span>

          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#052C34] font-bold leading-tight drop-shadow-xs">
            {mode === 'educacion' ? (
              <>
                Agenda tu cita{' '}
                <span className="italic bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#FFA000] bg-clip-text text-transparent font-normal block sm:inline">
                  educativa
                </span>
              </>
            ) : (
              <>
                Agenda tu sesión{' '}
                <span className="italic bg-gradient-to-r from-[#FFF8D6] via-[#FFD700] to-[#FFA000] bg-clip-text text-transparent font-normal block sm:inline">
                  holística
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#052C34]/95 font-medium leading-relaxed max-w-3xl mx-auto">
            {mode === 'educacion'
              ? 'Coordina una evaluación psicopedagógica, asesoría para padres o taller de estimulación temprana con Johanna Proaño.'
              : 'Separa tu espacio para medicina ancestral andina, terapia de flores de Bach, tarot terapéutico o limpias energéticas en Quito o de forma virtual.'}
          </p>
        </div>
      </div>

      {/* ========================================================
          FORMULARIO DE CONTACTO + INFORMACIÓN Y MAPA
         ======================================================== */}
      <div id="booking-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Columna Formulario */}
          <div className="lg:col-span-7 relative bg-[#07242C]/90 p-6 sm:p-8 md:p-9 rounded-2xl border border-[#FFD700]/40 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-xs">
              {mode === 'educacion'
                ? 'Agenda tu Evaluación o Consulta Educativa'
                : 'Agenda tu Sesión o Consulta Holística'}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 font-light mb-6">
              {mode === 'educacion'
                ? 'Llena tus datos y te responderemos a la brevedad para coordinar la evaluación o taller de tu hijo.'
                : 'Llena tus datos y te responderemos a la brevedad para confirmar la disponibilidad y modalidad.'}
            </p>

            {isSuccess ? (
              <div className="p-8 rounded-xl bg-[#041A20] border border-[#FFD700]/40 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[#FFD700] text-[#0A1C24] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-[#0A1C24]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">
                  ¡Solicitud Recibida con Éxito!
                </h4>
                <p className="text-xs sm:text-sm text-white/90 max-w-md mx-auto leading-relaxed">
                  Gracias por comunicarte con Casa Kinti. Johanna se pondrá en contacto contigo muy pronto a través de WhatsApp o correo electrónico.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={sendViaWhatsApp}
                    className="relative overflow-hidden inline-flex items-center gap-2 bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] text-xs font-serif font-bold uppercase tracking-wider px-6 py-3 rounded-sm shadow-md hover:shadow-[0_6px_22px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group/wa cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/wa:translate-x-full transition-transform duration-700 pointer-events-none" />
                    <MessageCircle className="relative z-10 w-4 h-4 text-[#0A1C24]" />
                    <span className="relative z-10">Enviar también por WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-[#FFD700] hover:text-white font-medium underline transition-colors cursor-pointer"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#FFF8D6] mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ej. María Fernanda Morales"
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-[#041A20] text-white text-sm focus:outline-hidden focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/50 transition-all placeholder:text-white/40"
                    />
                  </div>

                  {/* Teléfono / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#FFF8D6] mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej. +593 99 123 4567"
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-[#041A20] text-white text-sm focus:outline-hidden focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/50 transition-all placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Correo Electrónico */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#FFF8D6] mb-1.5">
                      Correo Electrónico (Opcional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-[#041A20] text-white text-sm focus:outline-hidden focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/50 transition-all placeholder:text-white/40"
                    />
                  </div>

                  {/* Fecha tentativa */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#FFF8D6] mb-1.5">
                      Fecha Tentativa
                    </label>
                    <input
                      type="date"
                      name="tentativeDate"
                      value={formData.tentativeDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-[#041A20] text-white text-sm focus:outline-hidden focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/50 transition-all"
                    />
                  </div>
                </div>

                {/* Servicio o producto de interés */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#FFF8D6] mb-1.5">
                    {mode === 'educacion'
                      ? 'Programa, Evaluación o Material de Interés *'
                      : 'Servicio o Producto Holístico de Interés *'}
                  </label>
                  <select
                    name="serviceOfInterest"
                    required
                    value={formData.serviceOfInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-[#041A20] text-white text-sm focus:outline-hidden focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/50 transition-all"
                  >
                    <option value="" className="bg-[#041A20] text-white">
                      {mode === 'educacion'
                        ? 'Selecciona un programa o servicio educativo...'
                        : 'Selecciona una terapia o producto holístico...'}
                    </option>
                    
                    {mode === 'educacion' ? (
                      <>
                        <optgroup label="Evaluaciones y Terapias Psicopedagógicas" className="bg-[#041A20] text-[#FFD700]">
                          <option value="Evaluación Psicopedagógica Integral" className="bg-[#041A20] text-white">Evaluación Psicopedagógica Integral</option>
                          <option value="Terapia de Problemas de Aprendizaje y Dislexia" className="bg-[#041A20] text-white">Terapia de Problemas de Aprendizaje y Dislexia</option>
                          <option value="Entrenamiento en Funciones Ejecutivas y TDAH" className="bg-[#041A20] text-white">Entrenamiento en Funciones Ejecutivas y TDAH</option>
                          <option value="Nivelación y Refuerzo Escolar Personalizado" className="bg-[#041A20] text-white">Nivelación y Refuerzo Escolar Personalizado</option>
                          <option value="Asesoría y Orientación para Padres" className="bg-[#041A20] text-white">Asesoría y Orientación para Padres</option>
                        </optgroup>

                        <optgroup label="Cursos e Inmersión Bilingüe Infantil" className="bg-[#041A20] text-[#FFD700]">
                          <option value="Taller de Fonética y Lectoescritura en Inglés" className="bg-[#041A20] text-white">Taller de Fonética y Lectoescritura en Inglés</option>
                          <option value="Programa Continuo de Estimulación Bilingüe" className="bg-[#041A20] text-white">Programa Continuo de Estimulación Bilingüe</option>
                        </optgroup>

                        <optgroup label="Materiales Didácticos y Recursos" className="bg-[#041A20] text-[#FFD700]">
                          <option value="Kit Didáctico Multisensorial y Guía" className="bg-[#041A20] text-white">Kit Didáctico Multisensorial y Guía</option>
                          <option value="Cuadernillos de Estimulación Cognitiva" className="bg-[#041A20] text-white">Cuadernillos de Estimulación Cognitiva</option>
                          <option value="Juegos Didácticos de Memoria y Atención" className="bg-[#041A20] text-white">Juegos Didácticos de Memoria y Atención</option>
                        </optgroup>
                      </>
                    ) : (
                      <>
                        <optgroup label="Servicios & Ceremonias Holísticas" className="bg-[#041A20] text-[#FFD700]">
                          <option value="Lectura de Tarot Completa ($35)" className="bg-[#041A20] text-white">Lectura de Tarot Completa ($35)</option>
                          <option value="Lectura Express de Tarot ($20)" className="bg-[#041A20] text-white">Lectura Express de Tarot ($20)</option>
                          <option value="Psicoterapia Asistida con Honguitos (4 Sesiones - $120)" className="bg-[#041A20] text-white">Psicoterapia Asistida con Honguitos (4 Sesiones - $120)</option>
                          <option value="Psicoterapia con Registros Akáshicos (2 Sesiones - $80)" className="bg-[#041A20] text-white">Psicoterapia con Registros Akáshicos (2 Sesiones - $80)</option>
                          <option value="Ceremonia de Ayahuasca en el Puyo (2 Días - $160)" className="bg-[#041A20] text-white">Ceremonia de Ayahuasca en el Puyo (2 Días - $160)</option>
                          <option value="Ceremonia de Unión de Pareja ($120)" className="bg-[#041A20] text-white">Ceremonia de Unión de Pareja ($120)</option>
                          <option value="Ceremonia de Cacao y Círculo de Mujeres ($120)" className="bg-[#041A20] text-white">Ceremonia de Cacao y Círculo de Mujeres ($120)</option>
                        </optgroup>

                        <optgroup label="Productos & Elementos Sagrados" className="bg-[#041A20] text-[#FFD700]">
                          <option value="Aceites Esenciales Personalizados 20ml ($15)" className="bg-[#041A20] text-white">Aceites Esenciales Personalizados 20ml ($15)</option>
                          <option value="Cuarzos Consagrados para Protección ($15)" className="bg-[#041A20] text-white">Cuarzos Consagrados para Protección ($15)</option>
                          <option value="Kit de Sahumerios Naturales & Sales de Baño ($12)" className="bg-[#041A20] text-white">Kit de Sahumerios Naturales & Sales de Baño ($12)</option>
                          <option value="Pulseras de Protección ($12)" className="bg-[#041A20] text-white">Pulseras de Protección ($12)</option>
                        </optgroup>
                      </>
                    )}
                  </select>
                </div>

                {/* Mensaje o Comentarios */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#FFF8D6] mb-1.5">
                    {mode === 'educacion'
                      ? 'Cuéntanos sobre tu hijo o motivo de consulta'
                      : 'Cuéntanos tu motivo de consulta'}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      mode === 'educacion'
                        ? 'Cuéntanos la edad de tu hijo, grado escolar o las dificultades de aprendizaje que deseas trabajar...'
                        : 'Describe brevemente tus síntomas emocionales, físicos o el motivo de tu consulta...'
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-[#041A20] text-white text-sm focus:outline-hidden focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]/50 transition-all placeholder:text-white/40"
                  />
                </div>

                {/* Botón Submit en Oro 24K */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] font-serif text-sm sm:text-base font-bold uppercase tracking-wider py-4 px-6 rounded-sm shadow-md hover:shadow-[0_8px_28px_rgba(255,215,0,0.6)] transition-all duration-300 hover:scale-[1.01] active:scale-97 disabled:opacity-70 cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  {mode === 'educacion' ? (
                    <SolicitarEvaluacionIcon className="relative z-10 w-5 h-5 text-[#0A1C24]" />
                  ) : (
                    <AgendarCalendarIcon className="relative z-10 w-5 h-5 text-[#0A1C24]" />
                  )}
                  <span className="relative z-10">
                    {isSubmitting
                      ? 'Enviando solicitud...'
                      : mode === 'educacion'
                      ? 'Solicitar Evaluación'
                      : 'Enviar Solicitud de Cita'}
                  </span>
                </button>

                <p className="text-[11px] text-white/70 text-center font-light">
                  Tus datos son 100% privados y confidenciales.
                </p>
              </form>
            )}
          </div>

          {/* Columna Información de Contacto + Mapa */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#07242C]/90 p-6 sm:p-8 rounded-2xl border border-[#FFD700]/40 shadow-[0_8px_32px_rgba(0,0,0,0.6)] space-y-6 text-white">
              <h4 className="font-serif text-2xl font-bold text-white drop-shadow-xs">
                Información de Casa Kinti
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-white/90">
                
                {/* Dirección */}
                <div className="flex items-start gap-3.5 group cursor-pointer">
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 ease-out group-hover:scale-110 overflow-hidden">
                    <MapPin className="relative z-10 w-5 h-5 text-[#0A1C24] stroke-[2.2]" />
                  </div>
                  <div className="pt-0.5">
                    <strong className="block text-[#FFD700] font-serif uppercase tracking-wider font-bold">Ubicación:</strong>
                    <span className="text-white/95">{CONTACT_INFO.address}</span>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start gap-3.5 group cursor-pointer">
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFEA79] via-[#E5C985] to-[#D4B26F] flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 ease-out group-hover:scale-110 overflow-hidden">
                    <Clock className="relative z-10 w-5 h-5 text-[#0A1C24] stroke-[2.2]" />
                  </div>
                  <div className="pt-0.5">
                    <strong className="block text-[#FFD700] font-serif uppercase tracking-wider font-bold">Horarios de Atención:</strong>
                    <span className="text-white/95">{CONTACT_INFO.hours}</span>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="pt-4 border-t border-white/10">
                <span className="font-serif italic text-2xl text-[#FFD700] block mb-3 leading-tight">
                  Síguenos en redes sociales
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={CONTACT_INFO.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full overflow-hidden hover:scale-115 hover:shadow-[0_0_12px_rgba(255,215,0,0.5)] transition-all duration-200 active:scale-95"
                    aria-label="TikTok Casa Kinti"
                  >
                    <img src="/icons/tiktok.png" alt="TikTok" className="w-full h-full object-cover" />
                  </a>

                  <a
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full overflow-hidden hover:scale-115 hover:shadow-[0_0_12px_rgba(255,215,0,0.5)] transition-all duration-200 active:scale-95"
                    aria-label="Instagram Casa Kinti"
                  >
                    <img src="/icons/instagram.png" alt="Instagram" className="w-full h-full object-cover" />
                  </a>

                  <a
                    href={CONTACT_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full overflow-hidden hover:scale-115 hover:shadow-[0_0_12px_rgba(255,215,0,0.5)] transition-all duration-200 active:scale-95"
                    aria-label="Facebook Casa Kinti"
                  >
                    <img src="/icons/facebook.png" alt="Facebook" className="w-full h-full object-cover" />
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Casa Kinti, me gustaría información.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full overflow-hidden hover:scale-115 hover:shadow-[0_0_12px_rgba(255,215,0,0.5)] transition-all duration-200 active:scale-95"
                    aria-label="WhatsApp Casa Kinti"
                  >
                    <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-full h-full object-cover" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa Embebido de Quito */}
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.6)] border border-[#FFD700]/40 h-52 relative">
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

    </section>
  );
};

