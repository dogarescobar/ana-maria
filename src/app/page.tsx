export default function Home() {
  const waNumber = "573187951886";
  const waText = encodeURIComponent(
    "Hola AM Movilidad & Longevidad. Quiero agendar una sesión de fisioterapia a domicilio en Cedritos/Usaquén. Mi nombre es: _____. Zona/Barrio: _____. Motivo: _____."
  );
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <div
  className="min-h-screen"
  style={{ background: "var(--background)", color: "var(--foreground)" }}
>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
          <div
  className="flex h-10 w-10 items-center justify-center rounded-xl text-white font-bold"
  style={{ background: "var(--brand)" }}
>
  AM
</div>
 
              
            
            <div className="leading-tight">
            <div className="font-semibold">AM Movilidad & Longevidad (PRUEBA)</div>
              <div className="text-xs text-slate-600">
                Fisioterapia a domicilio · Bogotá Norte
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a className="hover:text-slate-900" href="#servicios">
              Servicios
            </a>
            <a className="hover:text-slate-900" href="#como-funciona">
              Cómo funciona
            </a>
            <a className="hover:text-slate-900" href="#ana-maria">
              Profesional
            </a>
            <a className="hover:text-slate-900" href="#contacto">
              Contacto
            </a>
          </nav>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-slate-700">
              Cobertura inicial: Calle 116 a 160 · Autopista Norte – Cerros
              Orientales
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Fisioterapia a domicilio en Cedritos y Usaquén
            </h1>

            <p className="mt-4 text-lg text-slate-700">
              Recupera tu movilidad, reduce el dolor y mejora tu calidad de vida
              con atención profesional en casa. Enfoque especial en adulto
              mayor, rehabilitación postoperatoria y bienestar físico integral.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Ver servicios
              </a>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-0.5">✅</span>
                <span>Valoración profesional y plan personalizado</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✅</span>
                <span>15+ años de experiencia clínica</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✅</span>
                <span>Seguimiento cercano por WhatsApp</span>
              </li>
            </ul>
          </div>

          {/* Visual card */}
          <div className="rounded-3xl border bg-slate-50 p-6 shadow-sm">
            <div className="rounded-2xl bg-white p-6">
              <h2 className="text-lg font-semibold">¿En qué te podemos ayudar?</h2>
              <p className="mt-2 text-sm text-slate-700">
                Escríbenos y te guiamos con el plan más adecuado según tu caso.
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border p-4">
                  <div className="text-sm font-semibold">Adulto mayor</div>
                  <div className="mt-1 text-sm text-slate-700">
                    Movilidad, equilibrio, fuerza y prevención de caídas.
                  </div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-sm font-semibold">Postoperatorio</div>
                  <div className="mt-1 text-sm text-slate-700">
                    Rodilla, cadera y recuperación funcional progresiva.
                  </div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-sm font-semibold">Dolor muscular / articular</div>
                  <div className="mt-1 text-sm text-slate-700">
                    Manejo del dolor y mejora del rango de movimiento.
                  </div>
                </div>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 block rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                Quiero agendar una sesión
              </a>

              <p className="mt-3 text-xs text-slate-500">
                Zona objetivo: Cedritos · Usaquén · 116–160 · Autopista Norte–Cerros
                Orientales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Servicios de fisioterapia a domicilio</h2>
          <p className="mt-2 text-slate-700">
            Seleccionamos técnicas y progresiones según tu diagnóstico, dolor, movilidad y objetivos.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Fisioterapia general",
                text: "Manejo de dolor muscular y articular, rigidez y limitaciones de movimiento.",
              },
              {
                title: "Fisioterapia enfocada en adulto mayor",
                text: "Movilidad, equilibrio, fuerza, marcha y prevención de caídas.",
              },
              {
                title: "Rehabilitación postoperatoria",
                text: "Rodilla, cadera y recuperación funcional guiada, segura y progresiva.",
              },
              {
                title: "Terapias manuales y de bienestar",
                text: "Masaje terapéutico, piedras volcánicas, ventosas, vacuumterapia y relajación muscular dirigida.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-slate-700">{s.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Agenda tu atención en 3 pasos</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { step: "1", title: "Escríbenos por WhatsApp", text: "Cuéntanos tu caso, zona y disponibilidad." },
            { step: "2", title: "Evaluamos y coordinamos", text: "Te orientamos y agendamos la mejor hora para ti." },
            { step: "3", title: "Terapia en casa + seguimiento", text: "Sesión en domicilio y guía de ejercicios según tu proceso." },
          ].map((h) => (
            <div key={h.step} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
                {h.step}
              </div>
              <div className="mt-3 text-sm font-semibold">{h.title}</div>
              <div className="mt-2 text-sm text-slate-700">{h.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="ana-maria" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Ana María Amarillo</h2>
          <p className="mt-2 text-slate-700">
            Fisioterapeuta – Universidad del Rosario · 15+ años de experiencia clínica
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border p-6 shadow-sm">
              <p className="text-sm text-slate-700">
                Fundadora de <span className="font-semibold">AM Movilidad &amp; Longevidad</span>, un proyecto creado para
                brindar atención cercana, ética y de alta calidad a personas que valoran su salud, autonomía y bienestar.
              </p>
              <p className="mt-4 text-sm text-slate-700">
                Enfoque especial en recuperación funcional, adulto mayor y rehabilitación postoperatoria.
              </p>
              <p className="mt-4 text-sm text-slate-700">
                Visión: crecer hacia un <span className="font-semibold">equipo de fisioterapeutas especializados</span> manteniendo una atención humana y personalizada.
              </p>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Hablar con Ana María
              </a>
            </div>

            <div className="rounded-3xl border bg-slate-50 p-6 shadow-sm">
              <h3 className="text-sm font-semibold">Zona de atención (fase inicial)</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Cedritos</li>
                <li>• Usaquén</li>
                <li>• Calle 116 a 160</li>
                <li>• Autopista Norte – Cerros Orientales</li>
              </ul>

              <h3 className="mt-6 text-sm font-semibold">Ideal para</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Adultos mayores y prevención de caídas</li>
                <li>• Rehabilitación postoperatoria (rodilla/cadera)</li>
                <li>• Dolor muscular/articular</li>
                <li>• Recuperación y relajación dirigida</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Empieza hoy tu proceso de recuperación</h2>
          <p className="mt-2 text-slate-700">
            Escríbenos por WhatsApp y te orientamos con el mejor plan según tu caso, zona y disponibilidad.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
            >
              Agendar por WhatsApp · 318 795 1886
            </a>
            <a
              href="#servicios"
              className="rounded-xl border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Ver servicios
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Cobertura inicial: Calle 116 a 160 · Autopista Norte – Cerros Orientales · Cedritos · Usaquén
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-700">
          <div className="font-semibold">AM Movilidad &amp; Longevidad</div>
          <div className="mt-2">
            WhatsApp:{" "}
            <a className="font-semibold text-slate-900 underline" href={waLink} target="_blank" rel="noreferrer">
              318 795 1886
            </a>
          </div>
          <div className="mt-2 text-xs text-slate-500">
            © {new Date().getFullYear()} AM Movilidad &amp; Longevidad. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
      >
        WhatsApp
      </a>
    </div>
  );
}
