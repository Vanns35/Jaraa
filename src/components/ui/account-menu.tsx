import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface AccountMenuItem {
  label: string;
  to: string;
}

interface AccountMenuProps {
  items: AccountMenuItem[];
  label?: string;
}

export function AccountMenu({ items, label = 'Account' }: AccountMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium text-zinc-700 transition hover:bg-white/60 focus:outline-none"
          aria-label={label}
        >
          <User className="h-5 w-5" />
          <span className="hidden xl:inline">{label}</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-52 rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
      >
        {items.map((item) => (
          <DropdownMenuItem
            key={item.label}
            asChild
            className="cursor-pointer rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 outline-none transition focus:bg-zinc-100 focus:text-zinc-900 data-[highlighted]:bg-zinc-100"
          >
            <Link to={item.to} className="w-full" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
