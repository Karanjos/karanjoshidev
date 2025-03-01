import toast from "react-hot-toast";

export type CopyValue = "Email" | "Phone";

export const copyTextToClipboard = async (
  text: string,
  copyValue: CopyValue
): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(`${copyValue} copied to clipboard!`);
    return true;
  } catch (error) {
    console.error("Error copying text to clipboard: ", error);
    toast.error("Error copying to clipboard. Please try again!");
    return false;
  }
};
