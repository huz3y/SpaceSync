import supabase from "./supabase";

export async function getSpaces() {
  const { data, error } = await supabase.from("spaces").select("*");
  if (error) {
    console.error(error);
    throw new Error("Unable to load Spaces!");
  }
  return data;
}

export async function mutateSpace(newSpace, id) {
  let query = supabase.from("spaces");
  //Creating a space
  if (!id) {
    query = query.insert([newSpace]);
  }
  //Update a space
  if (id) {
    query = query.update(newSpace).eq("id", id).select();
  }
  const { data, error } = await query.select().single();

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
