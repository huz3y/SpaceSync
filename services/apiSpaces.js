import supabase from "./supabase";

export async function getSpaces() {
  const { data, error } = await supabase.from("spaces").select("*");
  if (error) {
    console.error(error);
    throw new Error("Unable to load Spaces!");
  }
  return data;
}
