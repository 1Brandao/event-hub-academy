
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Star } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const feedbackSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(5, "Comentário muito curto").max(500, "Comentário muito longo"),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export const UserFeedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const [hoveredStar, setHoveredStar] = useState(0);
  
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      rating: 0,
      comment: "",
    },
  });

  const onSubmit = (values: FeedbackFormValues) => {
    // In a real app, this would send the feedback to a server
    console.log("Feedback submitted:", values);
    toast.success("Obrigado pelo seu feedback!");
    form.reset();
    setIsOpen(false);
  };

  // Only show feedback button when user is logged in
  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="fixed right-4 bottom-4 z-40 shadow-md hover:bg-secondary hover:text-secondary-foreground"
        >
          <Star className="mr-2 h-4 w-4" />
          Avaliar plataforma
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Avaliação da Plataforma</DialogTitle>
          <DialogDescription>
            Compartilhe sua opinião sobre o sistema Faculdade Connect. Seu feedback é importante para melhorarmos!
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avaliação</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-8 w-8 cursor-pointer ${
                            star <= (hoveredStar || field.value)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted stroke-muted-foreground"
                          }`}
                          onClick={() => form.setValue("rating", star)}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comentários</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Conte-nos sua experiência com a plataforma..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Enviar avaliação</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
