import {redirect} from 'next/navigation';
import React from 'react'

const Page = () => {
  const userProfile = {
    name: "vishal vaish",
    isAdmin: true,
    cafeId: "255335523fddhf3542"
  }

  if (!userProfile.isAdmin) {
    return redirect(`/cafe/${userProfile.cafeId}`)
  }

  if (userProfile.isAdmin) {
    return redirect("/home")
  }
}

export default Page