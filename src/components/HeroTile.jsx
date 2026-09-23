import { motion } from 'framer-motion'
import BentoCard from './BentoCard'
import avatarSrc from '../assets/avatar.jpeg'

function AwsCertBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}
      className="inline-flex items-center gap-2 rounded-xl border border-[#FF9900]/30 bg-[#FF9900]/10 px-3 py-1.5"
    >
      {/* AWS smile logo mark */}
      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.064.056.128.056.184 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.383-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.839.064.287.04.583.104.887.176v-.568c0-.59-.123-1-.367-1.236-.248-.236-.671-.351-1.277-.351-.275 0-.559.031-.851.103a6.278 6.278 0 00-.851.272 2.257 2.257 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.275-.144.607-.264.995-.36a4.84 4.84 0 011.277-.163c.974 0 1.685.22 2.14.662.447.44.675 1.108.675 2.004v2.643zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.727-.136 5.965 5.965 0 00-.742-.048c-.527 0-.914.104-1.173.32-.259.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.806.296zm6.559.888c-.143 0-.239-.024-.303-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.15 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.197c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32L12.7 7.056l-1.238 5.197c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08h-.686zm10.216.233c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.224a.563.563 0 01-.048-.224v-.407c0-.167.063-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.28.32.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.815-.415.304-.096.623-.144.95-.144.167 0 .343.008.511.032.176.024.336.056.495.088.152.04.296.08.431.127.136.048.24.096.32.144a.653.653 0 01.23.216.53.53 0 01.071.279v.375c0 .168-.063.256-.183.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.768.247.329.367.706.367 1.117 0 .344-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.158.167z"
          fill="#FF9900"
        />
        <path
          d="M21.054 16.13c-2.55 1.889-6.253 2.89-9.444 2.89-4.469 0-8.494-1.653-11.537-4.402-.239-.215-.025-.51.263-.343 3.287 1.913 7.347 3.059 11.549 3.059 2.83 0 5.94-.583 8.802-1.795.431-.184.79.287.367.59z"
          fill="#FF9900"
        />
        <path
          d="M22.066 14.97c-.326-.42-2.157-.199-2.983-.1-.25.031-.288-.187-.063-.344 1.46-1.028 3.857-.733 4.136-.387.279.347-.073 2.75-1.445 3.897-.21.176-.41.082-.317-.15.308-.77.999-2.496.672-2.916z"
          fill="#FF9900"
        />
      </svg>
      <span className="text-xs font-semibold text-[#FF9900]">AWS Certified Developer</span>
      <span className="text-xs text-[#FF9900]/60">– Associate</span>
    </motion.div>
  )
}

export default function HeroTile() {
  return (
    <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between min-h-[280px]">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-accent-2/10 blur-3xl"
      />

      <div className="relative z-10 flex items-start gap-6">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex-shrink-0"
        >
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent-2 to-accent p-[2px]">
              <div className="h-full w-full rounded-full bg-surface overflow-hidden">
                <img
                  src={avatarSrc}
                  alt="Ranjith Kumar M."
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-surface shadow-[0_0_6px_2px_rgba(52,211,153,0.5)]" />
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-medium text-emerald-400 tracking-widest uppercase">
              Available for work
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none mb-3">
            <span className="text-slate-100">Ranjith </span>
            <span className="gradient-text">Kumar M.</span>
          </h1>

          <p className="text-base sm:text-lg font-semibold text-accent mb-3 font-mono">
            AWS Certified Developer &amp; Full-Stack Engineer
          </p>

          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg mb-4">
            Specializing in serverless architectures, conversational AI, and modern web
            applications. Based in{' '}
            <span className="text-slate-300 font-medium">Chennai, India</span>.
          </p>

          <AwsCertBadge />
        </div>
      </div>

      <div className="relative z-10 mt-6 flex flex-wrap gap-3">
        <a
          href="mailto:ranjithkumarmadhavan@gmail.com"
          className="inline-flex items-center gap-2 rounded-xl bg-accent/15 px-4 py-2 text-sm font-semibold text-accent border border-accent/20 hover:bg-accent/25 transition-colors duration-200"
        >
          Get in touch
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </BentoCard>
  )
}
