import supabase from "./supabase";

export async function getSpaces() {
  const { data, error } = await supabase.from("spaces").select("*");
  if (error) {
    console.error(error);
    throw new Error("Unable to load Spaces!");
  }
  return data;
}

export async function createSpace(newSpace) {
  const { data, error } = await supabase
    .from("spaces")
    .insert([newSpace])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Unable to load Spaces!");
  }
  return data;
}

export async function deleteSpace(id) {
  const { data, error } = await supabase.from("spaces").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Unable to delete Space!");
  }
  return data;
}
