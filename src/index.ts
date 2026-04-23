/**
 * @nekoi93/ui v1.0.0
 * White flat modern glassmorphism UI library
 *
 * @author   Nekoi <nekoi@everlib.pro>
 * @homepage https://everlib.pro/
 * @npm      https://www.npmjs.com/~nekoi93
 * @license  MIT
 *
 * Usage:
 *   import { Button, Card } from "@nekoi93/ui";
 *   import "@nekoi93/ui/styles";  // CSS design tokens
 */

// ─── Utilities ────────────────────────────────────────────────
export { cn } from "./lib/utils";

// ─── Hooks ────────────────────────────────────────────────────
export { useIsMobile } from "./hooks/use-mobile";
export { useToast, toast } from "./hooks/use-toast";

// ─── Components ───────────────────────────────────────────────
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/accordion";

export {
  Alert,
  AlertTitle,
  AlertDescription,
} from "./components/ui/alert";

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./components/ui/alert-dialog";

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "./components/ui/avatar";

export { Badge, badgeVariants } from "./components/ui/badge";

export { Button, buttonVariants } from "./components/ui/button";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";

export { Checkbox } from "./components/ui/checkbox";

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./components/ui/dialog";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuShortcut,
} from "./components/ui/dropdown-menu";

export { Input } from "./components/ui/input";

export { Label } from "./components/ui/label";

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "./components/ui/popover";

export { Progress } from "./components/ui/progress";

export {
  ScrollArea,
  ScrollBar,
} from "./components/ui/scroll-area";

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "./components/ui/select";

export { Separator } from "./components/ui/separator";

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./components/ui/sheet";

export { Skeleton } from "./components/ui/skeleton";

export { Slider } from "./components/ui/slider";

export { Spinner } from "./components/ui/spinner";

export { Switch } from "./components/ui/switch";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "./components/ui/table";

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./components/ui/tabs";

export { Textarea } from "./components/ui/textarea";

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./components/ui/toast";

export { Toaster } from "./components/ui/toaster";

export { Toggle, toggleVariants } from "./components/ui/toggle";

export {
  ToggleGroup,
  ToggleGroupItem,
} from "./components/ui/toggle-group";

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./components/ui/tooltip";

export { Sonner } from "./components/ui/sonner";
