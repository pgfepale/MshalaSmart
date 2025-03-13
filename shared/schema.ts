import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  phone: text("phone"),
  company: text("company")
});

export const insertContactSchema = createInsertSchema(contactMessages).extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional()
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
