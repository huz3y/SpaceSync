import { useState } from "react";
import { isPast, isToday } from "date-fns";
import supabase from "../services/supabase";
import Button from "../ui/Button";

import { bookings } from "./data-bookings";
import { spaces } from "./data-spaces";
import { clients } from "./data-clients";

async function deleteClients() {
  const { error } = await supabase.from("clients").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteSpaces() {
  const { error } = await supabase.from("spaces").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteBookings() {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createClients() {
  const { error } = await supabase.from("clients").insert(clients);
  if (error) console.log(error.message);
}

async function createSpaces() {
  const { error } = await supabase.from("spaces").insert(spaces);
  if (error) console.log(error.message);
}

async function createBookings() {
  const { data: clientData, error: clientError } = await supabase
    .from("clients")
    .select("id, full_name")
    .order("id");

  const { data: spaceData, error: spaceError } = await supabase
    .from("spaces")
    .select("id, name")
    .order("id");

  if (clientError || spaceError) {
    console.log(clientError || spaceError);
    return;
  }

  const clientMap = new Map(
    clientData.map((client) => [client.full_name, client.id])
  );
  const spaceMap = new Map(spaceData.map((space) => [space.name, space.id]));

  const finalBookings = bookings
    .map((booking) => {
      const clientId = clientMap.get(clients[booking.client_id - 1].full_name);
      const spaceId = spaceMap.get(spaces[booking.space_id - 1].name);

      if (!clientId || !spaceId) {
        console.error("Client or Space ID not found for booking:", booking);
        return null;
      }

      let status;
      const bookingDate = new Date(booking.date);

      // Determine status based on the booking date
      if (isPast(bookingDate) && !isToday(bookingDate)) {
        status = "completed";
      } else if (booking.status === "unconfirmed") {
        status = "unconfirmed";
      } else {
        status = "booked";
      }

      return {
        ...booking,
        client_id: clientId,
        space_id: spaceId,
        status,
      };
    })
    .filter(Boolean); // Filter out any null entries

  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    await deleteBookings();
    await deleteClients();
    await deleteSpaces();

    await createClients();
    await createSpaces();
    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#d1fae5",
        padding: "8px",
        borderRadius: "7px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>Sample Data Upload</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload All Data
      </Button>

      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload Bookings Only
      </Button>
    </div>
  );
}

export default Uploader;
