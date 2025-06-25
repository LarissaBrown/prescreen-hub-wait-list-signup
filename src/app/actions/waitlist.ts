'use server'

import { prisma } from '../../../prisma'

async function verifyRecaptcha(token: string) {
	const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
	})

	const data = await response.json()
	console.log('reCAPTCHA verification response:', data)
	return data.success
}

export async function addToWaitlist(formData: FormData) {
	const firstName = formData.get('firstName') as string
	const lastName = formData.get('lastName') as string
	const email = formData.get('email') as string
	const recaptchaToken = formData.get('recaptchaToken') as string

	if (!email || !firstName || !lastName) {
		throw new Error('Please fill in all fields')
	}

	const isVerified = await verifyRecaptcha(recaptchaToken)
	if (!isVerified) {
		throw new Error('reCAPTCHA verification failed')
	}

	try {
		await prisma.user.create({
			data: {
				email,
				firstName,
				lastName,
			},
		})
		return { success: true }
	} catch (error) {
		if (error instanceof Error && error.message.includes('Unique constraint')) {
			throw new Error('This email is already registered')
		}
		console.error('Failed to add to waitlist:', error)
		throw new Error('Failed to add to waitlist. Please try again.')
	}
}