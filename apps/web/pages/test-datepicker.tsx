import React, { useState } from "react";
import { DatePicker } from "@calcom/ui/components/form";

export default function TestDatePicker() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ padding: "50px" }}>
      <DatePicker
        date={date}
        onDatesChange={(d) => setDate(d)}
        minDate={null}
      />
    </div>
  );
}
