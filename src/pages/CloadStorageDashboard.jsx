
import React, { useMemo, useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Database,
  FileText,
  HardDrive,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const INITIAL_BUSINESSES = [
  {
    id: 1,
    name: "Acme Corporation",
    initials: "AC",
    color: "#2563eb",
    category: "Enterprise",
    records: 18420,
    storage: 12.8,
    activity: "2 minutes ago",
    status: "Active",
  },
  {
    id: 2,
    name: "Bright Solutions",
    initials: "BS",
    color: "#7c3aed",
    category: "Technology",
    records: 12680,
    storage: 8.4,
    activity: "18 minutes ago",
    status: "Active",
  },
  {
    id: 3,
    name: "Greenfield Ventures",
    initials: "GV",
    color: "#059669",
    category: "Agriculture",
    records: 8940,
    storage: 6.2,
    activity: "1 hour ago",
    status: "Active",
  },
  {
    id: 4,
    name: "Nova Retail Group",
    initials: "NR",
    color: "#ea580c",
    category: "Retail",
    records: 6370,
    storage: 4.7,
    activity: "3 hours ago",
    status: "Active",
  },
  {
    id: 5,
    name: "Summit Consulting",
    initials: "SC",
    color: "#db2777",
    category: "Consulting",
    records: 4210,
    storage: 3.1,
    activity: "Yesterday",
    status: "Active",
  },
  {
    id: 6,
    name: "Horizon Logistics",
    initials: "HL",
    color: "#0891b2",
    category: "Logistics",
    records: 2980,
    storage: 2.4,
    activity: "Yesterday",
    status: "Inactive",
  },
];

const STORAGE_CAPACITY = 200;
const INITIAL_USED = 42.6;

const STORAGE_TREND = [
  { month: "May", used: 25.1 },
  { month: "Jun", used: 28.4 },
  { month: "Jul", used: 31.2 },
  { month: "Aug", used: 34.8 },
  { month: "Sep", used: 38.2 },
  { month: "Oct", used: 42.6 },
];

const ACTIVITY = [
  {
    id: 1,
    title: "New records added",
    description: "Acme Corporation",
    time: "2 minutes ago",
    icon: FileText,
    color: "blue",
  },
  {
    id: 2,
    title: "Business data updated",
    description: "Bright Solutions",
    time: "18 minutes ago",
    icon: Database,
    color: "violet",
  },
  {
    id: 3,
    title: "New business created",
    description: "Greenfield Ventures",
    time: "Yesterday",
    icon: BriefcaseBusiness,
    color: "emerald",
  },
  {
    id: 4,
    title: "Storage report generated",
    description: "System activity",
    time: "Yesterday",
    icon: Activity,
    color: "orange",
  },
];

const NAVIGATION = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Businesses", icon: BriefcaseBusiness },
  { label: "Data records", icon: Database },
  { label: "Activity logs", icon: Activity },
];

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatStorage(value) {
  return `${value.toFixed(1)} GB`;
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeading({ title, subtitle, action }) {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="text-base font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  color,
  trend,
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    violet: "bg-violet-50 text-violet-600",
    emerald: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <Card className="p-5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            colors[color]
          }`}
        >
          <Icon size={21} />
        </div>
        {trend && (
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
            <ArrowUpRight size={13} />
            {trend}
          </span>
        )}
      </div>
      <p className="mt-5 text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </p>
      <p className="mt-2 text-xs text-slate-500">{description}</p>
    </Card>
  );
}

function StorageProgress({ used, total, color = "#2563eb" }) {
  const percentage = Math.min((used / total) * 100, 100);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-700">
          {formatStorage(used)}
        </span>
        <span className="text-slate-400">
          {percentage.toFixed(1)}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function ActivityItem({ item }) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    violet: "bg-violet-50 text-violet-600",
    emerald: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
  };

  const Icon = item.icon;

  return (
    <div className="flex items-start gap-3 py-4">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          colorClasses[item.color]
        }`}
      >
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-800">
          {item.title}
        </p>
        <p className="mt-1 truncate text-xs text-slate-500">
          {item.description}
        </p>
      </div>
      <span className="shrink-0 text-right text-xs text-slate-400">
        {item.time}
      </span>
    </div>
  );
}

function CreateBusinessModal({ onClose, onCreate }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("General");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Please enter a business name.");
      return;
    }

    onCreate({
      name: name.trim(),
      category,
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BriefcaseBusiness size={22} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Create a business
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Add a business to your storage workspace.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Business name
            </label>
            <input
              autoFocus
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setError("");
              }}
              placeholder="e.g. Acme Corporation"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />
            {error && (
              <p className="mt-2 text-xs text-red-600">{error}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Business category
            </label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            >
              <option>General</option>
              <option>Technology</option>
              <option>Retail</option>
              <option>Enterprise</option>
              <option>Agriculture</option>
              <option>Healthcare</option>
              <option>Consulting</option>
              <option>Logistics</option>
              <option>Education</option>
            </select>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 text-blue-600" size={19} />
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Dedicated data space
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  This preview creates a business entry using sample
                  data. It does not create a database or allocate real
                  storage.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Create business
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function CloudStorageDashboard() {
  const [businesses, setBusinesses] = useState(INITIAL_BUSINESSES);
  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState("Overview");
  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [menuBusiness, setMenuBusiness] = useState(null);
  const [toast, setToast] = useState("");

  const usedStorage =
    INITIAL_USED +
    businesses
      .slice(INITIAL_BUSINESSES.length)
      .reduce((sum, business) => sum + business.storage, 0);

  const remainingStorage = Math.max(
    STORAGE_CAPACITY - usedStorage,
    0
  );

  const totalRecords = businesses.reduce(
    (sum, business) => sum + business.records,
    0
  );

  const filteredBusinesses = useMemo(() => {
    const query = search.toLowerCase().trim();

    return businesses.filter(
      (business) =>
        business.name.toLowerCase().includes(query) ||
        business.category.toLowerCase().includes(query) ||
        business.status.toLowerCase().includes(query)
    );
  }, [businesses, search]);

  const largestBusiness = [...businesses].sort(
    (a, b) => b.storage - a.storage
  )[0];

  const mostActiveBusiness = [...businesses].sort(
    (a, b) => b.records - a.records
  )[0];

  const pieData = businesses.map((business) => ({
    name: business.name,
    value: business.storage,
    color: business.color,
  }));

  function showMessage(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2500);
  }

  function createBusiness({ name, category }) {
    const initials = name
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    const colors = [
      "#2563eb",
      "#7c3aed",
      "#059669",
      "#ea580c",
      "#db2777",
      "#0891b2",
    ];

    setBusinesses((current) => [
      {
        id: Date.now(),
        name,
        initials,
        color: colors[current.length % colors.length],
        category,
        records: 0,
        storage: 0,
        activity: "Just now",
        status: "Active",
      },
      ...current,
    ]);

    setShowModal(false);
    setActiveNav("Businesses");
    showMessage("Business added to the preview.");
  }

  function handleNav(label) {
    setActiveNav(label);
    setSidebarOpen(false);

    if (label !== "Overview" && label !== "Businesses") {
      showMessage(`${label} preview selected.`);
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f8fc] font-sans text-slate-800">
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[250px] flex-col bg-[#101b32] text-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[78px] items-center justify-between border-b border-white/10 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500">
              <Database size={22} />
            </div>
            <div>
              <p className="text-[17px] font-bold tracking-tight">
                CloudVault
              </p>
              <p className="text-[11px] text-slate-400">
                Business data storage
              </p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 lg:hidden"
            aria-label="Close navigation"
          >
            <X size={19} />
          </button>
        </div>

        <div className="px-4 pt-7">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Workspace
          </p>
          <nav className="space-y-1">
            {NAVIGATION.map(({ label, icon: Icon }) => {
              const active = activeNav === label;

              return (
                <button
                  key={label}
                  onClick={() => handleNav(label)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                    active
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-950/30"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  <span>{label}</span>
                  {label === "Businesses" && (
                    <span
                      className={`ml-auto rounded-md px-2 py-0.5 text-xs ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {businesses.length}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="px-4 pt-8">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Preferences
          </p>
          <button
            onClick={() => handleNav("Settings")}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <Settings size={19} />
            Settings
          </button>
          <button
            onClick={() => showMessage("Help center preview selected.")}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <CircleHelp size={19} />
            Help center
          </button>
        </div>

        <div className="mt-auto p-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                <ShieldCheck size={17} />
              </div>
              <span className="text-sm font-semibold">Storage overview</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-400">Used capacity</span>
              <span className="font-semibold text-white">
                {((usedStorage / STORAGE_CAPACITY) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{
                  width: `${Math.min(
                    (usedStorage / STORAGE_CAPACITY) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              {formatStorage(remainingStorage)} remaining
            </p>
          </div>

          <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-violet-500 text-sm font-bold">
              AD
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Admin User</p>
              <p className="text-xs text-slate-500">Workspace admin</p>
            </div>
            <button
              onClick={() => showMessage("Account menu preview.")}
              className="rounded-lg p-1 text-slate-400 hover:bg-white/10"
              aria-label="Account menu"
            >
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-[250px]">
        <header className="sticky top-0 z-20 flex h-[78px] items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-xl sm:px-7 lg:px-9">
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
              aria-label="Open navigation"
            >
              <Menu size={20} />
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Workspace</span>
                <ChevronRight size={13} />
                <span className="truncate text-slate-600">
                  {activeNav}
                </span>
              </div>
              <h3 className="mt-1 truncate text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                {activeNav === "Overview"
                  ? "Dashboard overview"
                  : activeNav}
              </h3>
            </div>
          </div>

          <div className="ml-3 flex items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              All systems operational
            </div>
            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-50"
                aria-label="Notifications"
              >
                <Bell size={19} />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-blue-600" />
              </button>
              {notificationOpen && (
                <div className="absolute right-0 top-14 z-30 w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                  <p className="font-semibold text-slate-900">
                    Notifications
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Your sample workspace is running normally. No
                    critical alerts.
                  </p>
                  <button
                    onClick={() => setNotificationOpen(false)}
                    className="mt-3 text-sm font-semibold text-blue-600"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => handleNav("Settings")}
              className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 sm:flex"
            >
              <Settings size={17} />
              <span>Settings</span>
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] p-4 sm:p-7 lg:p-9">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm text-slate-500">
                Welcome back, Admin
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Your data at a glance
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Monitor your businesses, text records, and storage
                consumption from one place.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <Plus size={18} />
              Create business
            </button>
          </div>

          {/* Main storage summary */}
          <div style={{ backgroundColor: "#14264a" }} className="relative mb-6 overflow-hidden border-0 bg-[#14264a] p-5 text-white shadow-lg sm:p-7 lg:p-9">
            <div className="pointer-events-none absolute -right-16 -top-32 h-80 w-80 rounded-full border-[45px] border-blue-400/5" />
            <div className="pointer-events-none absolute -right-2 -top-16 h-56 w-56 rounded-full border-[30px] border-blue-400/5" />

            <div  className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                    <HardDrive size={19} />
                  </div>
                  <span className="text-sm font-medium text-blue-100">
                    Total storage capacity
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-4xl font-bold tracking-tight sm:text-5xl">
                    {formatStorage(usedStorage)}
                  </span>
                  <span className="text-sm text-blue-200">
                    of {STORAGE_CAPACITY} GB used
                  </span>
                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/30">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 transition-all"
                    style={{
                      width: `${Math.min(
                        (usedStorage / STORAGE_CAPACITY) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-blue-200">
                  <span>
                    {((usedStorage / STORAGE_CAPACITY) * 100).toFixed(1)}%
                    of total capacity used
                  </span>
                  <span>
                    {formatStorage(remainingStorage)} available
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleNav("Businesses")}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
                  >
                    <Database size={16} />
                    View businesses
                  </button>
                  <button
                    onClick={() => showMessage("Storage report preview selected.")}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    View storage report
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <Check size={19} />
                  </div>
                  <p className="mt-4 text-xs text-blue-200">
                    Available space
                  </p>
                  <p className="mt-1 text-xl font-bold sm:text-2xl">
                    {formatStorage(remainingStorage)}
                  </p>
                  <p className="mt-2 text-[11px] text-blue-200/70">
                    Ready for new records
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/10 text-blue-200">
                    <Database size={19} />
                  </div>
                  <p className="mt-4 text-xs text-blue-200">
                    Text records
                  </p>
                  <p className="mt-1 text-xl font-bold sm:text-2xl">
                    {formatNumber(totalRecords)}
                  </p>
                  <p className="mt-2 text-[11px] text-blue-200/70">
                    Across all businesses
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Total businesses"
              value={businesses.length}
              description="Businesses in your workspace"
              icon={BriefcaseBusiness}
              color="blue"
              trend="+2 this month"
            />
            <StatCard
              title="Total text records"
              value={formatNumber(totalRecords)}
              description="Stored across all businesses"
              icon={FileText}
              color="violet"
              trend="+12.8%"
            />
            <StatCard
              title="Storage consumed"
              value={formatStorage(usedStorage)}
              description="Estimated text data usage"
              icon={HardDrive}
              color="emerald"
            />
            <StatCard
              title="Active businesses"
              value={businesses.filter((b) => b.status === "Active").length}
              description="Currently marked as active"
              icon={Zap}
              color="orange"
            />
          </div>

          {/* Charts */}
          <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_0.85fr]">
            <Card className="p-5 sm:p-6">
              <SectionHeading
                title="Storage usage"
                subtitle="Estimated growth of stored text data"
                action={
                  <button
                    onClick={() => showMessage("Showing the last six months.")}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Last 6 months
                    <ChevronDown size={14} />
                  </button>
                }
              />

              <div className="mb-4 flex items-end gap-3">
                <span className="text-3xl font-bold tracking-tight text-slate-900">
                  {formatStorage(usedStorage)}
                </span>
                <span className="mb-1 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <ArrowUpRight size={14} />
                  11.5%
                </span>
              </div>

              <div className="h-[260px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={STORAGE_TREND}
                    margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="storageGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#3b82f6"
                          stopOpacity={0.22}
                        />
                        <stop
                          offset="100%"
                          stopColor="#3b82f6"
                          stopOpacity={0.01}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      stroke="#edf0f5"
                      strokeDasharray="4 4"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8", fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8", fontSize: 11 }}
                      tickFormatter={(value) => `${value} GB`}
                    />
                    <Tooltip
                      formatter={(value) => [`${value} GB`, "Storage used"]}
                      contentStyle={{
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        boxShadow: "0 8px 30px rgba(15,23,42,0.08)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="used"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      fill="url(#storageGradient)"
                      activeDot={{ r: 5, strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Illustrative historical figures for dashboard design.
              </p>
            </Card>

            <Card className="p-5 sm:p-6">
              <SectionHeading
                title="Storage distribution"
                subtitle="Usage across businesses"
              />

              <div className="relative h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={65}
                      outerRadius={92}
                      paddingAngle={3}
                      stroke="none"
                    >
                      {pieData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [
                        `${Number(value).toFixed(1)} GB`,
                        "Storage",
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs text-slate-500">Total used</span>
                  <span className="mt-1 text-2xl font-bold text-slate-900">
                    {formatStorage(usedStorage)}
                  </span>
                </div>
              </div>

              <div className="mt-3 space-y-3">
                {businesses.slice(0, 5).map((business) => (
                  <div
                    key={business.id}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: business.color }}
                    />
                    <span className="min-w-0 flex-1 truncate text-xs font-medium text-slate-600">
                      {business.name}
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      {formatStorage(business.storage)}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Business insights */}
          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="p-5 sm:p-6">
              <SectionHeading
                title="Most active business"
                subtitle="Highest number of text records"
              />

              {mostActiveBusiness && (
                <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white"
                    style={{ backgroundColor: mostActiveBusiness.color }}
                  >
                    {mostActiveBusiness.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-bold text-slate-900">
                      {mostActiveBusiness.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {mostActiveBusiness.category}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                      <span className="font-semibold text-slate-700">
                        {formatNumber(mostActiveBusiness.records)} records
                      </span>
                      <span className="text-slate-500">
                        {formatStorage(mostActiveBusiness.storage)}
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                    Active
                  </span>
                </div>
              )}

              <div className="mt-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Record count by business
                </p>
                <div className="space-y-4">
                  {[...businesses]
                    .sort((a, b) => b.records - a.records)
                    .slice(0, 4)
                    .map((business) => (
                      <div key={business.id}>
                        <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                          <span className="truncate font-medium text-slate-700">
                            {business.name}
                          </span>
                          <span className="shrink-0 font-semibold text-slate-800">
                            {formatNumber(business.records)}
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${
                                mostActiveBusiness?.records
                                  ? (business.records /
                                      mostActiveBusiness.records) *
                                    100
                                  : 0
                              }%`,
                              backgroundColor: business.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Card>

            <Card className="p-5 sm:p-6">
              <SectionHeading
                title="Highest storage usage"
                subtitle="Business consuming the most space"
              />

              {largestBusiness && (
                <>
                  <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white"
                      style={{ backgroundColor: largestBusiness.color }}
                    >
                      {largestBusiness.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-bold text-slate-900">
                        {largestBusiness.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        {largestBusiness.category}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-800">
                        {formatStorage(largestBusiness.storage)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-slate-900">
                        {usedStorage
                          ? (
                              (largestBusiness.storage / usedStorage) *
                              100
                            ).toFixed(1)
                          : "0.0"}
                        %
                      </p>
                      <p className="text-[10px] text-slate-400">
                        of used storage
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-500">
                        Overall capacity
                      </span>
                      <span className="font-semibold text-slate-800">
                        {formatStorage(usedStorage)} / {STORAGE_CAPACITY} GB
                      </span>
                    </div>
                    <StorageProgress
                      used={usedStorage}
                      total={STORAGE_CAPACITY}
                    />
                  </div>
                </>
              )}

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Storage by business
                </p>
                <div className="space-y-4">
                  {[...businesses]
                    .sort((a, b) => b.storage - a.storage)
                    .slice(0, 4)
                    .map((business) => (
                      <div key={business.id}>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="truncate text-xs font-medium text-slate-700">
                            {business.name}
                          </span>
                          <span className="shrink-0 text-xs font-semibold text-slate-800">
                            {formatStorage(business.storage)}
                          </span>
                        </div>
                        <StorageProgress
                          used={business.storage}
                          total={largestBusiness?.storage || 1}
                          color={business.color}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Businesses table and activity */}
          <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[1.5fr_0.7fr]">
            <Card className="min-w-0 overflow-hidden">
              <div className="p-5 sm:p-6">
                <SectionHeading
                  title="Your businesses"
                  subtitle="Manage and monitor business data usage"
                  action={
                    <button
                      onClick={() => setShowModal(true)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
                    >
                      <Plus size={15} />
                      Add new
                    </button>
                  }
                />

                <div className="relative">
                  <Search
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search businesses, categories, or status..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left">
                  <thead>
                    <tr className="border-y border-slate-100 bg-slate-50/70">
                      <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Business
                      </th>
                      <th className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Records
                      </th>
                      <th className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Storage usage
                      </th>
                      <th className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Status
                      </th>
                      <th className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Last activity
                      </th>
                      <th className="px-4 py-3.5" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredBusinesses.map((business) => (
                      <tr
                        key={business.id}
                        className="transition hover:bg-slate-50/70"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white"
                              style={{
                                backgroundColor: business.color,
                              }}
                            >
                              {business.initials}
                            </div>
                            <div>
                              <p className="whitespace-nowrap text-sm font-semibold text-slate-800">
                                {business.name}
                              </p>
                              <p className="mt-1 text-xs text-slate-400">
                                {business.category}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-slate-700">
                          {formatNumber(business.records)}
                        </td>
                        <td className="px-4 py-4">
                          <div className="w-28">
                            <StorageProgress
                              used={business.storage}
                              total={Math.max(STORAGE_CAPACITY, 1)}
                              color={business.color}
                            />
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                              business.status === "Active"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                business.status === "Active"
                                  ? "bg-emerald-500"
                                  : "bg-slate-400"
                              }`}
                            />
                            {business.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500">
                          {business.activity}
                        </td>
                        <td className="relative px-4 py-4">
                          <button
                            onClick={() =>
                              setMenuBusiness(
                                menuBusiness === business.id
                                  ? null
                                  : business.id
                              )
                            }
                            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                            aria-label={`Options for ${business.name}`}
                          >
                            <MoreHorizontal size={18} />
                          </button>

                          {menuBusiness === business.id && (
                            <div className="absolute right-8 top-10 z-10 w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
                              <button
                                onClick={() => {
                                  setMenuBusiness(null);
                                  showMessage(
                                    `${business.name}: preview details selected.`
                                  );
                                }}
                                className="w-full rounded-lg px-3 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-50"
                              >
                                View details
                              </button>
                              <button
                                onClick={() => {
                                  setMenuBusiness(null);
                                  setBusinesses((current) =>
                                    current.map((item) =>
                                      item.id === business.id
                                        ? {
                                            ...item,
                                            status:
                                              item.status === "Active"
                                                ? "Inactive"
                                                : "Active",
                                          }
                                        : item
                                    )
                                  );
                                  showMessage("Business status updated in preview.");
                                }}
                                className="w-full rounded-lg px-3 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-50"
                              >
                                Toggle status
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}

                    {filteredBusinesses.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-6 py-12 text-center">
                          <Search
                            size={25}
                            className="mx-auto text-slate-300"
                          />
                          <p className="mt-3 text-sm font-semibold text-slate-700">
                            No businesses found
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            Try another search term.
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-5 py-4 sm:px-6">
                <p className="text-xs text-slate-500">
                  Showing{" "}
                  <span className="font-semibold text-slate-700">
                    {filteredBusinesses.length}
                  </span>{" "}
                  of {businesses.length} businesses
                </p>
                <button
                  onClick={() => handleNav("Businesses")}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  View businesses
                  <ChevronRight size={15} />
                </button>
              </div>
            </Card>

            <Card className="p-5 sm:p-6">
              <SectionHeading
                title="Recent activity"
                subtitle="Latest workspace events"
                action={
                  <button
                    onClick={() => handleNav("Activity logs")}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    View all
                  </button>
                }
              />

              <div className="divide-y divide-slate-100">
                {ACTIVITY.map((item) => (
                  <ActivityItem key={item.id} item={item} />
                ))}
              </div>

              <button
                onClick={() => handleNav("Activity logs")}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                View activity log
                <ChevronRight size={15} />
              </button>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Keep your data organized
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Monitor your text data consumption and review
                      business activity regularly.
                    </p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800"
                    >
                      Add a business
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 text-xs text-slate-400">
            <p>© 2026 CloudVault. Business data management.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => showMessage("Privacy policy preview selected.")}
                className="hover:text-slate-600"
              >
                Privacy
              </button>
              <button
                onClick={() => showMessage("Support preview selected.")}
                className="hover:text-slate-600"
              >
                Support
              </button>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Demo workspace
              </span>
            </div>
          </footer>
        </main>
      </div>

      {showModal && (
        <CreateBusinessModal
          onClose={() => setShowModal(false)}
          onCreate={createBusiness}
        />
      )}

      {toast && (
        <div className="fixed bottom-5 right-5 z-[60] flex max-w-sm items-center gap-3 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-2xl">
          <Check size={17} className="shrink-0 text-emerald-400" />
          {toast}
          <button
            onClick={() => setToast("")}
            className="ml-2 text-slate-400 hover:text-white"
            aria-label="Dismiss message"
          >
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
