import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";

export const BookingModal = ({ isOpen, onClose, activityName }) => {
  const [formData, setFormData] = useState({
    name: "",
    hotel: "",
    dateTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = () => {
    const { name, hotel, dateTime } = formData;

    if (!name || !hotel || !dateTime) {
      alert("Please fill in all fields");
      return;
    }

    const message = `Hi! I'd like to book ${activityName}.\n\nName: ${name}\nHotel: ${hotel}\nPreferred Date & Time: ${dateTime}`;

    window.open(
      `https://wa.me/8562093439140?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setFormData({ name: "", hotel: "", dateTime: "" });
    onClose();
  };

  const handleClose = () => {
    setFormData({ name: "", hotel: "", dateTime: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book {activityName}</DialogTitle>
          <DialogDescription>
            Please provide your details to complete your booking
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="hotel" className="text-sm font-medium">
              Hotel / Accommodation
            </label>
            <Input
              id="hotel"
              name="hotel"
              placeholder="Enter your hotel name"
              value={formData.hotel}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="dateTime" className="text-sm font-medium">
              Preferred Date & Time
            </label>
            <Input
              id="dateTime"
              name="dateTime"
              placeholder="e.g., Tomorrow at 9:00 AM or March 15, 2025 at 2:00 PM"
              value={formData.dateTime}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={handleClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleBooking} className="flex-1 gap-2">
            <MessageCircle className="h-4 w-4" />
            Book via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};