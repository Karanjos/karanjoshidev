"use client";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import Container from "./Container";
import Link from "next/link";
import { useState } from "react";
import { copyTextToClipboard } from "@/lib/utils";

const GetInTouch = () => {
  const email: string = "karanjoshi0901@gmail.com";
  const phone: string = "+91 7827506089";
  return (
    <Container
      tag="Get In Touch"
      id="contact"
      classNames="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-semibold text-md text-center">
          Get In Touch What’s next? Feel free to reach out to me if you are
          looking for a developer, have a query, or simply want to connect.
        </p>
        <p className="flex items-center text-[1.125rem] font-bold">
          <MailOutlineIcon className="inline-block mr-2" />
          <Link href="mailto: [email protected]">karanjoshi0901@gmail.com</Link>
          <button
            onClick={() => copyTextToClipboard(email, "Email")}
            className="inline-block ml-2 relative"
          >
            <ContentCopyOutlinedIcon className="inline-block ml-2" />
          </button>
        </p>
        <p className="flex items-center text-[1.125rem] font-bold">
          <LocalPhoneOutlinedIcon className="inline-block mr-2" />
          <Link href="tel:+917827506089">+91 7827506089</Link>
          <button
            onClick={() => copyTextToClipboard(phone, "Phone")}
            className="inline-block ml-2 relative"
          >
            <ContentCopyOutlinedIcon className="inline-block ml-2" />
          </button>
        </p>
        <p>You may also find me on these platforms!</p>
        <div className="flex justify-center items-center gap-4">
          <Link href="https://github.com/Karanjos" target="_blank">
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/karan-joshi-8b3910213/"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link href="https://x.com/KaranJoshi0901" target="_blank">
            <XIcon />
          </Link>
          <Link
            href="https://www.instagram.com/jo_sh_i_kar_an/"
            target="_blank"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </Container>
  );
};
export default GetInTouch;
