<script setup>
/**
 * LoginCard — Figma "Desktop - 6" (LOGIN/REG · node 51:2999)
 * ---------------------------------------------------------------------------
 * Every measurement below is taken straight from the Figma frame:
 *
 *   frame ............ 1440 × 1024, background #888888
 *   backdrop photo ... 1419 × 1092 @ (66, 71), object-cover, 0 4px 4px rgba(0,0,0,.2)
 *   plinth ........... 517 × 450  @ (-51, +137) relative to the card, r15, #550000
 *   card ............. 420 × 545, r20, #FFFFFF, 1px #000 inset stroke,
 *                      0 20px 40px rgba(22,28,33,.1) + 24px backdrop blur,
 *                      padding 40 / 40 / 70
 *   accent rule ...... 420 × 4, #800020 → transparent → #800020, opacity .8
 *
 * Typography: Inclusive Sans 700 24/32 (-0.6px) for the title,
 * Inter for the UI copy and Liberation Serif 600 for the two CTAs.
 *
 * The screen is fully fluid: the card is centered and capped at the Figma
 * width, the backdrop covers the viewport and only snaps to the exact Figma
 * geometry on ≥1280px viewports (where the 1440 × 1024 frame is reproduced 1:1).
 */
import { useId, ref } from 'vue'
import { RouterLink } from 'vue-router'

import backdropUrl from '@/assets/login-backdrop.jpg'

defineProps({
  /** Where "Register here" points to. */
  registerTo: {
    type: [String, Object],
    default: '/register',
  },
})

const emit = defineEmits(['submit', 'forgot-password'])

/** Two-way bindable form state (falls back to local state when unbound). */
const email = defineModel('email', { type: String, default: '' })
const password = defineModel('password', { type: String, default: '' })
const keepSignedIn = defineModel('keepSignedIn', { type: Boolean, default: true })

/** The Figma frame shows the revealed-password state. */
const showPassword = ref(true)

const uid = useId()
const emailId = `${uid}-email`
const passwordId = `${uid}-password`
const rememberId = `${uid}-remember`

function handleSubmit() {
  emit('submit', {
    email: email.value,
    password: password.value,
    keepSignedIn: keepSignedIn.value,
  })
}
</script>

<template>
  <main
    class="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-canvas p-4 font-sans sm:p-6"
  >
    <!-- Background photograph — node 52:3201 -->
    <img
      :src="backdropUrl"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 h-full w-full object-cover shadow-[0_4px_4px_rgba(0,0,0,0.2)] xl:inset-auto xl:left-[66px] xl:top-[71px] xl:h-[1092px] xl:w-[1419px]"
    />

    <!-- Card anchor (the card keeps its exact 420px width, everything else scales) -->
    <div class="relative z-10 w-full max-w-[420px] lg:-mt-[27px]">
      <!-- Decorative plinth sitting behind the card — node 51:3088 -->
      <div
        aria-hidden="true"
        class="absolute -left-[12.14%] top-[25.14%] h-[82.57%] w-[123.1%] rounded-[15px] bg-burgundy-deep"
      />

      <!-- Frosted glass card — node 51:3005 -->
      <!-- The 1px #000 hairline is an inset shadow (Figma uses an inside
           stroke) so it never eats into the 340px content column. -->
      <div
        class="relative rounded-[20px] bg-white px-10 pt-10 pb-[70px] shadow-[inset_0_0_0_1px_#000000,0_20px_40px_rgba(22,28,33,0.1)] backdrop-blur-2xl"
      >
        <!-- Top decorative collegiate micro-rule — node 51:3036 -->
        <div
          aria-hidden="true"
          class="absolute inset-x-0 top-0 h-1 rounded-t-[20px] bg-linear-to-r from-burgundy/0 via-burgundy to-burgundy/0 opacity-80"
        />

        <!-- Header section & brand mark — node 51:3006 -->
        <header class="flex flex-col items-center">
          <h1 class="font-display text-[24px] font-bold leading-8 tracking-[-0.6px] text-ink">
            Liceo Creatives
          </h1>
          <p class="mt-[13px] text-[10px] leading-[17px] font-light text-black">
            School Media Production Booking System
          </p>
        </header>

        <!-- Login form section — node 51:3038 (gap 16, total height 292) -->
        <form class="mt-[35px] flex flex-col gap-4" @submit.prevent="handleSubmit">
          <!-- Email field — node 51:3039 (70px) -->
          <div class="flex w-full flex-col">
            <div class="mb-2 flex items-center justify-between">
              <label
                :for="emailId"
                class="text-[11px] leading-[14px] font-semibold tracking-[0.88px] text-label uppercase"
              >
                Email
              </label>
              <span class="text-[10px] leading-[14px] tracking-[0.88px] text-muted">
                liceo domain
              </span>
            </div>

            <div
              class="flex h-12 w-full items-center rounded-[12px] border border-black bg-white transition focus-within:ring-2 focus-within:ring-burgundy/25"
            >
              <span class="pl-4 text-muted">
                <svg
                  class="h-[13.3px] w-[16.7px]"
                  viewBox="0 0 17 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1.7 13.6C1.2325 13.6 0.832291 13.4335 0.499374 13.1006C0.166458 12.7677 0 12.3675 0 11.9V1.7C0 1.2325 0.166458 0.832291 0.499374 0.499374C0.832291 0.166458 1.2325 0 1.7 0H15.3C15.7675 0 16.1677 0.166458 16.5006 0.499374C16.8335 0.832291 17 1.2325 17 1.7V11.9C17 12.3675 16.8335 12.7677 16.5006 13.1006C16.1677 13.4335 15.7675 13.6 15.3 13.6H1.7ZM8.49999 7.64999L1.7 3.4V11.9H15.3V3.4L8.49999 7.64999ZM8.49999 5.94999L15.3 1.7H1.7L8.49999 5.94999ZM1.7 3.4V1.7V3.4V11.9V3.4Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <input
                :id="emailId"
                v-model="email"
                type="email"
                name="email"
                autocomplete="username"
                placeholder="you@liceo.edu.ph"
                class="h-full w-full min-w-0 bg-transparent pr-3 pl-3 text-[14px] leading-5 text-ink outline-none placeholder:text-ink"
              />
            </div>
          </div>

          <!-- Password field — node 51:3052 (96px) -->
          <div class="flex w-full flex-col">
            <div class="mb-2 flex items-center justify-between">
              <label
                :for="passwordId"
                class="text-[11px] leading-[14px] font-semibold tracking-[0.88px] text-label uppercase"
              >
                Password
              </label>
              <span class="text-[10px] leading-[14px] tracking-[0.88px] text-muted">
                standard credentials
              </span>
            </div>

            <div
              class="relative flex h-12 w-full items-center rounded-[12px] border border-black bg-white transition focus-within:ring-2 focus-within:ring-burgundy/25"
            >
              <span class="pl-4 text-muted">
                <svg
                  class="h-[17.5px] w-[13.3px]"
                  viewBox="0 0 14 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1.71429 18C1.24286 18 0.839286 17.8321 0.503571 17.4964C0.167857 17.1607 0 16.7571 0 16.2857V7.71429C0 7.24286 0.167857 6.83929 0.503571 6.50357C0.839286 6.16786 1.24286 6 1.71429 6H2.57143V4.28571C2.57143 3.1 2.98929 2.08929 3.825 1.25357C4.66071 0.417857 5.67143 0 6.85714 0C8.04286 0 9.05357 0.417857 9.88929 1.25357C10.725 2.08929 11.1429 3.1 11.1429 4.28571V6H12C12.4714 6 12.875 6.16786 13.2107 6.50357C13.5464 6.83929 13.7143 7.24286 13.7143 7.71429V16.2857C13.7143 16.7571 13.5464 17.1607 13.2107 17.4964C12.875 17.8321 12.4714 18 12 18H1.71429ZM1.71429 16.2857H12V7.71429H1.71429V16.2857ZM6.85714 13.7143C7.32857 13.7143 7.73214 13.5464 8.06786 13.2107C8.40357 12.875 8.57143 12.4714 8.57143 12C8.57143 11.5286 8.40357 11.125 8.06786 10.7893C7.73214 10.4536 7.32857 10.2857 6.85714 10.2857C6.38571 10.2857 5.98214 10.4536 5.64643 10.7893C5.31071 11.125 5.14286 11.5286 5.14286 12C5.14286 12.4714 5.31071 12.875 5.64643 13.2107C5.98214 13.5464 6.38571 13.7143 6.85714 13.7143ZM4.28571 6H9.42857V4.28571C9.42857 3.57143 9.17857 2.96429 8.67857 2.46429C8.17857 1.96429 7.57143 1.71429 6.85714 1.71429C6.14286 1.71429 5.53571 1.96429 5.03571 2.46429C4.53571 2.96429 4.28571 3.57143 4.28571 4.28571V6ZM1.71429 16.2857V7.71429V16.2857Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <input
                :id="passwordId"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                autocomplete="current-password"
                placeholder="••••••••••••••••••••"
                class="h-full w-full min-w-0 bg-transparent pr-[46px] pl-3 text-[14px] leading-5 tracking-[0.7px] text-ink outline-none placeholder:tracking-normal placeholder:text-muted"
              />

              <!-- Button - toggle password visibility — node 51:3070 -->
              <button
                type="button"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
                :aria-pressed="showPassword"
                class="absolute right-3 flex h-[23.9px] w-[29.4px] cursor-pointer items-center justify-center rounded-lg p-[6px] text-muted transition hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
                @click="showPassword = !showPassword"
              >
                <svg
                  class="h-[11.9px] w-[17.4px]"
                  viewBox="0 0 18 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8.8 9.6C9.8 9.6 10.65 9.25 11.35 8.55C12.05 7.85 12.4 7 12.4 6C12.4 5 12.05 4.15 11.35 3.45C10.65 2.75 9.8 2.4 8.8 2.4C7.8 2.4 6.95 2.75 6.25 3.45C5.55 4.15 5.2 5 5.2 6C5.2 7 5.55 7.85 6.25 8.55C6.95 9.25 7.8 9.6 8.8 9.6ZM8.8 8.16C8.2 8.16 7.69 7.95 7.27 7.53C6.85 7.11 6.64 6.6 6.64 6C6.64 5.4 6.85 4.89 7.27 4.47C7.69 4.05 8.2 3.84 8.8 3.84C9.4 3.84 9.91 4.05 10.33 4.47C10.75 4.89 10.96 5.4 10.96 6C10.96 6.6 10.75 7.11 10.33 7.53C9.91 7.95 9.4 8.16 8.8 8.16ZM8.8 12C6.85333 12 5.08 11.4567 3.48 10.37C1.88 9.28333 0.72 7.82667 0 6C0.72 4.17333 1.88 2.71667 3.48 1.63C5.08 0.543333 6.85333 0 8.8 0C10.7467 0 12.52 0.543333 14.12 1.63C15.72 2.71667 16.88 4.17333 17.6 6C16.88 7.82667 15.72 9.28333 14.12 10.37C12.52 11.4567 10.7467 12 8.8 12ZM8.8 10.4C10.3067 10.4 11.69 10.0033 12.95 9.21C14.21 8.41667 15.1733 7.34667 15.84 6C15.1733 4.65333 14.21 3.58333 12.95 2.79C11.69 1.99667 10.3067 1.6 8.8 1.6C7.29333 1.6 5.91 1.99667 4.65 2.79C3.39 3.58333 2.42667 4.65333 1.76 6C2.42667 7.34667 3.39 8.41667 4.65 9.21C5.91 10.0033 7.29333 10.4 8.8 10.4Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            <!-- Forgot password link — node 51:3060 -->
            <div class="mt-2 flex justify-end">
              <a
                href="#"
                class="text-[13px] leading-[18px] font-medium tracking-[0.13px] text-burgundy transition hover:text-burgundy-deep hover:underline"
                @click.prevent="emit('forgot-password')"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <!-- Remember session toggle — node 51:3074 (18px) -->
          <div class="mt-0.5 flex items-center gap-[10px]">
            <input
              :id="rememberId"
              v-model="keepSignedIn"
              type="checkbox"
              name="remember"
              class="h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-[2.5px] border border-black bg-white transition checked:border-burgundy checked:bg-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
            />
            <label :for="rememberId" class="cursor-pointer text-[12px] leading-4 text-label">
              Keep workstation signed in
            </label>
          </div>

          <!-- Submit button CTA — node 51:3079 (8 + 52) -->
          <button
            type="submit"
            class="mt-2 flex h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-[12px] bg-burgundy px-6 py-3.5 font-serif text-[16px] leading-6 font-semibold tracking-[-0.4px] text-white shadow-[0_2px_4px_-2px_rgba(128,0,32,0.2),0_4px_6px_-1px_rgba(128,0,32,0.2)] transition hover:bg-burgundy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy active:translate-y-px"
          >
            Log In
            <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </form>

        <!-- Registration link — node 51:3033 -->
        <p class="mt-[21px] flex items-center justify-center gap-1">
          <span class="text-[14px] leading-5 text-label">Don't have an account?</span>
          <RouterLink
            :to="registerTo"
            class="font-serif text-[16px] leading-6 font-semibold text-burgundy transition hover:text-burgundy-deep hover:underline"
          >
            Register here
          </RouterLink>
        </p>
      </div>
    </div>
  </main>
</template>
