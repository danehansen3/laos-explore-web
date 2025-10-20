import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bus, Train } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Transportation = () => {
  const handleBooking = () => {
    window.open(
      "https://wa.me/8562093439140?text=Hi! I'd like to book bus or train tickets",
      "_blank"
    );
  };

  return (
    <section id="transportation" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Transportation Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your bus and train tickets with us - all prices include pickup from your hotel or guesthouse
          </p>
        </div>

        <Tabs defaultValue="bus" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="bus" className="gap-2">
              <Bus className="h-4 w-4" />
              Bus Tickets
            </TabsTrigger>
            <TabsTrigger value="train" className="gap-2">
              <Train className="h-4 w-4" />
              Train Tickets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bus" className="space-y-8">
            {/* To Vientiane */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bus className="h-5 w-5" />
                  To Vientiane
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Departure</TableHead>
                      <TableHead>Arrival</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Mini Van</TableCell>
                      <TableCell>9:00 AM</TableCell>
                      <TableCell>11:30 AM</TableCell>
                      <TableCell className="text-right">150,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mini Van</TableCell>
                      <TableCell>12:00 PM</TableCell>
                      <TableCell>2:30 PM</TableCell>
                      <TableCell className="text-right">150,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mini Van</TableCell>
                      <TableCell>2:00 PM</TableCell>
                      <TableCell>4:30 PM</TableCell>
                      <TableCell className="text-right">150,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mini Van</TableCell>
                      <TableCell>4:00 PM</TableCell>
                      <TableCell>6:30 PM</TableCell>
                      <TableCell className="text-right">200,000 Kip</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Private Van Service */}
            <Card>
              <CardHeader>
                <CardTitle>Private Van Service</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Destination</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Laos-Thailand Friendship Bridge</TableCell>
                      <TableCell>Anytime</TableCell>
                      <TableCell className="text-right">1,700,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Wattay Airport</TableCell>
                      <TableCell>Anytime</TableCell>
                      <TableCell className="text-right">1,500,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Vientiane City</TableCell>
                      <TableCell>Anytime</TableCell>
                      <TableCell className="text-right">1,500,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Luang Prabang</TableCell>
                      <TableCell>Anytime</TableCell>
                      <TableCell className="text-right">4,500,000 Kip</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* To Southern Laos */}
            <Card>
              <CardHeader>
                <CardTitle>To Southern Laos</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Destination</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Departure</TableHead>
                      <TableHead>Arrival</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Thakhek</TableCell>
                      <TableCell>Local Bus</TableCell>
                      <TableCell>9 AM</TableCell>
                      <TableCell>6 PM</TableCell>
                      <TableCell className="text-right">500,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Thakhek</TableCell>
                      <TableCell>Sleeping Bus</TableCell>
                      <TableCell>1 PM</TableCell>
                      <TableCell>2 AM</TableCell>
                      <TableCell className="text-right">550,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Savannakhet</TableCell>
                      <TableCell>Sleeping Bus</TableCell>
                      <TableCell>1 PM</TableCell>
                      <TableCell>6 AM</TableCell>
                      <TableCell className="text-right">550,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pakse</TableCell>
                      <TableCell>Sleeping Bus</TableCell>
                      <TableCell>1 PM</TableCell>
                      <TableCell>6 AM</TableCell>
                      <TableCell className="text-right">550,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4,000 Islands</TableCell>
                      <TableCell>Sleeping Bus</TableCell>
                      <TableCell>1 PM</TableCell>
                      <TableCell>11 AM</TableCell>
                      <TableCell className="text-right">800,000 Kip</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* To Cambodia */}
            <Card>
              <CardHeader>
                <CardTitle>To Cambodia</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Destination</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Departure</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Siem Reap</TableCell>
                      <TableCell>Sleeping Bus</TableCell>
                      <TableCell>1 PM</TableCell>
                      <TableCell>~35 hrs</TableCell>
                      <TableCell className="text-right">1,550,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Phnom Penh</TableCell>
                      <TableCell>Sleeping Bus</TableCell>
                      <TableCell>1 PM</TableCell>
                      <TableCell>~32 hrs</TableCell>
                      <TableCell className="text-right">1,550,000 Kip</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* To Vietnam */}
            <Card>
              <CardHeader>
                <CardTitle>To Vietnam</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Destination</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Departure</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Hanoi</TableCell>
                      <TableCell>Sleeping Bus</TableCell>
                      <TableCell>9 AM</TableCell>
                      <TableCell>~22 hrs</TableCell>
                      <TableCell className="text-right">980,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Vinh</TableCell>
                      <TableCell>Sleeping Bus</TableCell>
                      <TableCell>9 AM</TableCell>
                      <TableCell>~16 hrs</TableCell>
                      <TableCell className="text-right">980,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Da Nang</TableCell>
                      <TableCell>Sleeping Bus</TableCell>
                      <TableCell>9 AM</TableCell>
                      <TableCell>~24 hrs</TableCell>
                      <TableCell className="text-right">1,050,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Hue</TableCell>
                      <TableCell>Sleeping Bus</TableCell>
                      <TableCell>9 AM</TableCell>
                      <TableCell>~22 hrs</TableCell>
                      <TableCell className="text-right">980,000 Kip</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* To Thailand */}
            <Card>
              <CardHeader>
                <CardTitle>To Thailand</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Destination</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Departure</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Nong Khai</TableCell>
                      <TableCell>International Bus</TableCell>
                      <TableCell>9:00 AM</TableCell>
                      <TableCell>7 hrs</TableCell>
                      <TableCell className="text-right">300,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Udon Thani</TableCell>
                      <TableCell>International Bus</TableCell>
                      <TableCell>9:00 AM</TableCell>
                      <TableCell>7.5 hrs</TableCell>
                      <TableCell className="text-right">350,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Chiang Mai</TableCell>
                      <TableCell>Super VIP Bus</TableCell>
                      <TableCell>9:00 AM</TableCell>
                      <TableCell>~20 hrs</TableCell>
                      <TableCell className="text-right">1,200,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pattaya</TableCell>
                      <TableCell>Super VIP Bus</TableCell>
                      <TableCell>9:00 AM</TableCell>
                      <TableCell>~21 hrs</TableCell>
                      <TableCell className="text-right">950,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bangkok</TableCell>
                      <TableCell>Super VIP Bus</TableCell>
                      <TableCell>9:00 AM</TableCell>
                      <TableCell>~22 hrs</TableCell>
                      <TableCell className="text-right">950,000 Kip</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="train" className="space-y-8">
            {/* Local Train */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="h-5 w-5" />
                  Local Train Routes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Vang Vieng → Vientiane</h4>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Class</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>First Class</TableCell>
                          <TableCell className="text-right">350,000 Kip</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Second Class</TableCell>
                          <TableCell className="text-right">450,000 Kip</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Business Class</TableCell>
                          <TableCell className="text-right">850,000 Kip</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Vang Vieng → Luang Prabang</h4>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Class</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>First Class</TableCell>
                          <TableCell className="text-right">350,000 Kip</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Second Class</TableCell>
                          <TableCell className="text-right">450,000 Kip</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Business Class</TableCell>
                          <TableCell className="text-right">850,000 Kip</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Train to Bangkok */}
            <Card>
              <CardHeader>
                <CardTitle>Train to Bangkok</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  All trains depart at 9:00 AM and arrive at 7:00 AM the next day
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Class</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>First Class (Upper Berth)</TableCell>
                      <TableCell className="text-right">1,650,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>First Class (Lower Berth)</TableCell>
                      <TableCell className="text-right">1,750,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Second Class (Upper Berth)</TableCell>
                      <TableCell className="text-right">1,450,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Second Class (Lower Berth)</TableCell>
                      <TableCell className="text-right">1,550,000 Kip</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Fan Coach</TableCell>
                      <TableCell className="text-right">1,000,000 Kip</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" className="gap-2" onClick={handleBooking}>
            <MessageCircle className="h-5 w-5" />
            Book Transportation
          </Button>
        </div>
      </div>
    </section>
  );
};
