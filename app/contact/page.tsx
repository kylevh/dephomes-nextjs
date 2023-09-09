import ContactHeader from '@/components/contactComponents/ContactHeader'
import React from 'react'

function ContactPage() {
  return (
    <main className="bg-green ">
    <div className="flex min-h-screen pt-20 sm:pt-24 bg-dep-offwhite">
      <div className="w-full p-6">
        {/* Page Description */}
        <ContactHeader />
        {/* Photo grid */}
        <div className="container mx-auto py-24 px-8">
          <div className="justify-center items-center" style={{ display: 'grid', gridGap: '30px 8px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))' }}>

          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default ContactPage