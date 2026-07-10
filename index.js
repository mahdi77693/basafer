const translations = {
  en: {
    store_name: "BASAFER",
    nav_dashboard: "Dashboard",
    nav_products: "Products",
    nav_orders: "Orders",
    nav_customers: "Customers",
    nav_customer_details: "Customer Details",
    nav_analytics: "Analytics",
    nav_settings: "Settings",
    search_placeholder: "Search product, order, or customer...",
    user_name: "Alex Carter",
    user_role: "Admin",
    welcome_title: "Welcome back, Alex! 👋",
    welcome_sub: "Here's an overview of your store's performance today.",
    stat_sales: "Total Sales",
    stat_orders: "New Orders",
    stat_customers: "Active Customers",
    stat_conversion: "Conversion Rate",
    vs_last_month: "vs last month",
    chart_revenue: "Revenue Analysis",
    chart_category: "Sales by Category",
    table_recent_orders: "Recent Orders",
    btn_view_all: "View All",
    th_order_id: "Order ID",
    th_customer: "Customer",
    th_date: "Date",
    th_amount: "Amount",
    th_status: "Status",
    status_completed: "Completed",
    status_processing: "Processing",
    status_shipped: "Shipped",
    status_cancelled: "Cancelled",
    products_title: "Interactive Products",
    products_subtitle: "Manage and preview high-tech products grid.",
    btn_add_product: "Add Product",
    filter_search_placeholder: "Filter products by title...",
    opt_all: "All Categories",
    opt_electronics: "Electronics",
    opt_clothing: "Clothing",
    opt_accessories: "Accessories",
    analytics_title: "Deep Performance Analytics",
    settings_title: "Global Settings Console",
    settings_subtitle:
      "Configure parameters, profile coordinates, and preferences.",
    coming_soon_desc:
      "This page is styled, designed, and fully integrated. Ready for advanced dynamic table development.",
    cust_page_title: "Customers Directory",
    cust_page_subtitle:
      "Manage your client base, view histories, and update statuses.",
    cust_details_title: "Customer Details Overview",
    cust_details_subtitle:
      "Inspect total lifecycle value, active notes, and logs.",
    orders_title: "Orders Archive",
    orders_subtitle: "Track, filter, and process store transactions live.",
    btn_add_customer: "Add Customer",
    search_cust_placeholder: "Search by name or email...",
    search_orders_placeholder: "Search order ID or customer...",
    opt_all_cust: "All Statuses",
    opt_all_orders: "All Statuses",
    opt_active: "Active",
    opt_vip: "VIP",
    opt_inactive: "Inactive",
    th_cust_name: "Customer",
    th_cust_email: "Email Address",
    th_cust_spent: "Total Spent",
    th_cust_orders: "Orders",
    th_cust_status: "Status",
    th_cust_action: "Actions",
    lbl_prod_image_upload: "Product Image File (Optional)",
    nav_marketing: "Marketing Hub",
    marketing_title: "Stunning Campaign Desk",
    marketing_subtitle:
      "Build campaigns, design live banners and monitor ROI with real-time feedback.",
    btn_campaign: "Campaign",
    lbl_live_health_title: "Live Health Score",
    lbl_live_health_state: "(Optimal)",
    lbl_promo_title: "Instant Promo Code Generator",
    lbl_promo_desc:
      "Generate instantly active marketing codes directly synced into the payment gateways.",
    btn_generate_coupon: "Generate Coupon",
    lbl_select_customer: "Select profile:",
    lbl_email_col: "Email:",
    lbl_loyalty_tier: "Loyalty Tier",
    lbl_avg_ticket: "Average Ticket",
    lbl_admin_notes_title: "Admin Notes & Logs",
    lbl_admin_notes_placeholder: "Write internal operational notes...",
    btn_save_note: "Save Profile Note",
    lbl_general_config: "General Configuration",
    lbl_admin_profile: "Administrator Profile",
    lbl_display_name: "Display Name",
    lbl_operational_role: "Operational Role",
    lbl_operational_preferences: "Operational Preferences",
    lbl_notif_sound_group: "Notifications & Sound",
    lbl_realtime_dispatch: "Realtime Order Dispatch",
    desc_realtime_dispatch: "Receive instant alerts on new order placements",
    lbl_audit_sound: "Audit Sound Alerts",
    desc_audit_sound: "Play neon audio chime during checkout activity",
    lbl_daily_digest: "Daily Email Digest",
    desc_daily_digest: "Receive daily email with overall store performance",
    lbl_security_backup_group: "Security & Backups",
    lbl_hourly_backup: "Hourly Server Backup",
    desc_hourly_backup: "Auto backup databases hourly on cloud servers",
    lbl_enforce_mfa: "Enforce Admin MFA",
    desc_enforce_mfa: "Require multi-factor authorization for admin profiles",
    lbl_strict_session: "Auto Session Timeout",
    desc_strict_session:
      "Enforce strict session log out after 15 minutes of inactivity",
    lbl_interface_perf_group: "Interface & Performance",
    lbl_auto_theme_sync: "Auto Theme Synchronization",
    desc_auto_theme_sync:
      "Sync light and dark mode state based on local system settings",
    lbl_fluid_animations: "Ambient Fluid Animations",
    desc_fluid_animations: "Enable transitions and ambient glowing shadows",
    lbl_inventory_alerts_group: "Inventory Alerts & Currency",
    lbl_low_stock_threshold: "Low-Stock Alert Trigger",
    lbl_store_currency: "Store Currency",
    currency_usd: "USD ($) - US Dollar",
    currency_eur: "EUR (€) - Euro",
    currency_sar: "SAR (SR) - Saudi Riyal",
    currency_iqd: "IQD (ID) - Iraqi Dinar",
    btn_save_settings: "Save Global Changes",
    lbl_live_traffic_pulse: "Live Traffic Pulse",
    lbl_active_visitors: "Active Session visitors",
    lbl_bounce_rate: "Bounce Rate",
    lbl_vs_yesterday: "vs yesterday",
    lbl_avg_session: "Average Session",
    lbl_avg_retention: "avg retention",
    lbl_funnel_conversion: "Funnel Conversion",
    lbl_completion_ctr: "completion CTR",
    lbl_ltv_cac_ratio: "LTV to CAC Ratio",
    lbl_optimal_acquisition: "Highly Optimal acquisition",
    lbl_acq_channels: "Acquisition Channel Volume",
    lbl_engagement_funnel: "Customer Engagement Funnel Vector",
    lbl_traffic_index: "Traffic Source Value Index",
    lbl_th_source: "Source / Medium",
    lbl_th_visitors: "Monthly Visitors",
    lbl_th_bounce: "Average Bounce Rate",
    lbl_th_value: "Conversion Value",
    lbl_th_trend: "Index Trend",
    lbl_active_campaigns_title: "Active Campaigns Dashboard",
    lbl_campaign_creator: "Dynamic Campaign Creator",
    lbl_campaign_headline: "Campaign Headline Name",
    lbl_platform_channel: "Platform Channel",
    lbl_discount_coupon: "Discount % Coupon",
    lbl_budget_allocation: "Budget Allocation ($)",
    lbl_creative_color: "Creative Styling Color",
    btn_launch_campaign: "Launch Promotional Campaign",
    lbl_ad_preview: "Interactive Ad Mockup Preview",
    lbl_ad_preview_desc:
      "See real-time changes of the digital graphic before initiating server-side campaign ad sets.",
    lbl_compliance_badge: "Live Creative",
    lbl_special_ad_offer: "SPECIAL AD OFFER",
    lbl_shop_now: "Shop Now",
    lbl_guarantee_text:
      "* Guaranteed compliance check passed for dynamic targeting networks.",
    modal_add_cust_title: "Add Customer",
    modal_add_cust_subtitle: "Register a new buyer account into the directory.",
    lbl_cust_fullname: "Full Name",
    lbl_cust_email: "Email Address",
    lbl_cust_status: "Account Status",
    lbl_cust_spent: "Total Spent ($)",
    btn_save_customer: "Save Customer",
    btn_cancel: "Cancel",
    btn_save: "Save Product",
    modal_add_title: "Create Cyber Product",
    modal_add_subtitle:
      "Add a brand new item into your interactive grid catalog.",
    lbl_prod_title: "Product Title",
    lbl_prod_price: "Price ($)",
    lbl_prod_stock: "Stock Qty",
    lbl_prod_category: "Category",
    lbl_prod_img: "Visual Colorway",
    opt_instagram: "Instagram Grid",
    opt_tiktok: "TikTok Video Ad",
    opt_google: "Google Paid Network",
    opt_grad_purple: "Purple Retro Gradient",
    opt_grad_teal: "Cyberpunk Teal Forest",
    opt_grad_pink: "Neon Sunset Dream",
    opt_grad_blue: "Aether Plasma Blue",
    color_purple_haze: "Purple Haze",
    color_teal_forest: "Teal Forest",
    color_pink_sunset: "Pink Sunset",
    color_blue_plasma: "Blue Plasma",
    btn_ship: "Ship",
    btn_deliver: "Deliver",
    month_jan: "Jan",
    month_feb: "Feb",
    month_mar: "Mar",
    month_apr: "Apr",
    month_may: "May",
    month_jun: "Jun",
    month_jul: "Jul",
    channel_organic: "Organic Traffic",
    channel_paid: "Paid Traffic",
    funnel_impressions: "Impressions",
    funnel_engagement: "Engagement",
    funnel_cart: "Cart Conversion",
    funnel_checkout: "Checkout Step",
    funnel_loyalty: "Loyal Loop",
    tier_platinum: "Platinum VIP",
    tier_silver: "Silver Tier",
    tier_bronze: "Bronze Tier",
    acc_vip: "VIP Member",
    acc_active: "Active Account",
    acc_inactive: "Inactive Account",
  },
  ar: {
    store_name: "باسفر",
    nav_dashboard: "لوحة القيادة",
    nav_products: "المنتجات",
    nav_orders: "الطلبات",
    nav_customers: "العملاء",
    nav_customer_details: "تفاصيل العميل",
    nav_analytics: "تحليلات الأداء",
    nav_settings: "الإعدادات",
    search_placeholder: "ابحث عن منتج، طلب، أو عميل...",
    user_name: "أليكس كارتر",
    user_role: "مدير النظام",
    welcome_title: "مرحباً بعودتك، أليكس! 👋",
    welcome_sub: "إليك نظرة عامة على أداء متجرك اليوم.",
    stat_sales: "إجمالي المبيعات",
    stat_orders: "الطلبات الجديدة",
    stat_customers: "العملاء النشطين",
    stat_conversion: "معدل التحويل",
    vs_last_month: "مقارنة بالشهر الماضي",
    chart_revenue: "تحليل الإيرادات",
    chart_category: "المبيعات حسب الفئة",
    table_recent_orders: "أحدث الطلبات",
    btn_view_all: "عرض الكل",
    th_order_id: "رقم الطلب",
    th_customer: "العميل",
    th_date: "التاريخ",
    th_amount: "المبلغ",
    th_status: "الحالة",
    status_completed: "مكتمل",
    status_processing: "قيد المعالجة",
    status_shipped: "تم الشحن",
    status_cancelled: "ملغي",
    products_title: "المنتجات التفاعلية",
    products_subtitle: "إدارة واستعراض شبكة المنتجات العصرية المبتكرة.",
    btn_add_product: "إضافة منتج",
    filter_search_placeholder: "ابحث عن منتج بالاسم...",
    opt_all: "كل الفئات",
    opt_electronics: "الإلكترونيات",
    opt_clothing: "الملابس",
    opt_accessories: "الإكسسوارات",
    analytics_title: "تحليلات الأداء المتقدمة",
    settings_title: "لوحة التحكم بالإعدادات",
    settings_subtitle: "تكوين معلمات النظام والإحصائيات والتفضيلات الشخصية.",
    coming_soon_desc:
      "هذه الصفحة مجهزة ومصممة ومنسقة بالكامل لتتماشى مع الهوية البصرية للثيم، وهي واجهتك الذكية لمتابعة وتحليل البيانات.",
    cust_page_title: "دليل العملاء",
    cust_page_subtitle: "إدارة قاعدة عملائك وعرض سجلاتهم وتحديث حالاتهم.",
    cust_details_title: "تفاصيل العميل الشاملة",
    cust_details_subtitle:
      "فحص إجمالي قيمة المعاملات والولاء والملاحظات الإدارية.",
    orders_title: "أرشيف طلبات المتجر",
    orders_subtitle: "متابعة وتصفية ومعالجة طلبات عملائك مباشرة.",
    btn_add_customer: "إضافة عميل",
    search_cust_placeholder: "ابحث بالاسم أو البريد...",
    search_orders_placeholder: "ابحث برقم الطلب أو العميل...",
    opt_all_cust: "كل الحالات",
    opt_all_orders: "كل الحالات",
    opt_active: "نشط",
    opt_vip: "VIP",
    opt_inactive: "غير نشط",
    th_cust_name: "العميل",
    th_cust_email: "البريد الإلكتروني",
    th_cust_spent: "إجمالي الإنفاق",
    th_cust_orders: "الطلبات",
    th_cust_status: "الحالة",
    th_cust_action: "إجراءات",
    lbl_prod_image_upload: "ملف صورة المنتج (اختياري)",
    nav_marketing: "المركز التسويقي",
    marketing_title: "منصة الحملات الإبداعية",
    marketing_subtitle:
      "صمم إعلانات حية تفاعلية، أطلق حملات فورية، وراقب مؤشرات العائد والتفاعل.",
    btn_campaign: "حملة بريد جماعي",
    lbl_live_health_title: "مؤشر سلامة المتجر الحي",
    lbl_live_health_state: "(ممتاز)",
    lbl_promo_title: "مولد أكواد الخصم الفوري",
    lbl_promo_desc: "توليد أكواد قسائم فعالة ومزامنتها فورياً مع بوابات الدفع.",
    btn_generate_coupon: "توليد قسيمة الخصم",
    lbl_select_customer: "اختر ملف العميل:",
    lbl_email_col: "البريد الإلكتروني:",
    lbl_loyalty_tier: "فئة الولاء",
    lbl_avg_ticket: "متوسط الفاتورة",
    lbl_admin_notes_title: "ملاحظات وسجلات الإدارة",
    lbl_admin_notes_placeholder: "اكتب الملاحظات التشغيلية والسرية هنا...",
    btn_save_note: "حفظ ملاحظات الملف",
    lbl_general_config: "الإعدادات العامة للوحة",
    lbl_admin_profile: "الملف الشخصي للمشرف",
    lbl_display_name: "الاسم المستعار",
    lbl_operational_role: "الدور الوظيفي",
    lbl_operational_preferences: "تفضيلات التشغيل الذكية",
    lbl_notif_sound_group: "التنبيهات والأصوات",
    lbl_realtime_dispatch: "إرسال الإشعارات في الوقت الفعلي",
    desc_realtime_dispatch: "تلقي إشعارات فورية عند تقديم طلبات شراء جديدة",
    lbl_audit_sound: "أصوات تنبيه المراجعة",
    desc_audit_sound:
      "تشغيل نغمات تنبيه نيون تفاعلية أثناء الأنشطة والعمليات المالية",
    lbl_daily_digest: "ملخص الأداء اليومي بالبريد",
    desc_daily_digest:
      "تلقي رسالة بريد إلكتروني يومية توضح الأداء المالي والبيعي الإجمالي",
    lbl_security_backup_group: "الأمن والنسخ الاحتياطي",
    lbl_hourly_backup: "النسخ الاحتياطي السحابي التلقائي",
    desc_hourly_backup:
      "حفظ وتأمين قواعد البيانات تلقائياً كل ساعة على خوادم سحابية",
    lbl_enforce_mfa: "فرض التحقق الثنائي (MFA)",
    desc_enforce_mfa:
      "تفعيل التحقق متعدد العوامل لجميع حسابات الإدارة والمشرفين لزيادة الأمان",
    lbl_strict_session: "إنهاء صلاحية الجلسة آلياً",
    desc_strict_session:
      "تسجيل الخروج التلقائي الحازم بعد 15 دقيقة من عدم النشاط لحماية البيانات",
    lbl_interface_perf_group: "الواجهة والأداء البصري",
    lbl_auto_theme_sync: "مزامنة سمة النظام التلقائية",
    desc_auto_theme_sync:
      "تكييف وتبديل المظهر الداكن والفاتح آلياً بناءً على إعدادات جهازك المحلية",
    lbl_fluid_animations: "الرسوم الحركية المحيطة المتدفقة",
    desc_fluid_animations:
      "تفعيل المؤثرات الحركية السلسة والظلال المتوهجة الفاخرة لواجهة اللوحة",
    lbl_inventory_alerts_group: "تنبيهات المخزون والعملة",
    lbl_low_stock_threshold: "الحد الأدنى لتنبيهات نفاد المخزون",
    lbl_store_currency: "العملة الافتراضية للمتجر",
    currency_usd: "دولار أمريكي - USD ($)",
    currency_eur: "يورو - EUR (€)",
    currency_sar: "ريال سعودي - SAR (ر.س)",
    currency_iqd: "دينار عراقي - IQD (د.ع)",
    btn_save_settings: "حفظ الإعدادات والتغييرات العامة",
    lbl_live_traffic_pulse: "نبض الزوار المباشر",
    lbl_active_visitors: "جلسات نشطة في هذه اللحظة",
    lbl_bounce_rate: "معدل الارتداد",
    lbl_vs_yesterday: "مقارنة بالأمس",
    lbl_avg_session: "متوسط الجلسة",
    lbl_avg_retention: "معدل الاحتفاظ بالزائر",
    lbl_funnel_conversion: "قمع معدلات التحويل",
    lbl_completion_ctr: "معدل إكمال الطلب المالي",
    lbl_ltv_cac_ratio: "معدل القيمة العمرية إلى تكلفة الاكتساب (LTV:CAC)",
    lbl_optimal_acquisition: "معدل اكتساب ممتاز ومثالي للغاية",
    lbl_acq_channels: "حجم قنوات الاستحواذ وجلب العملاء",
    lbl_engagement_funnel: "تحليل رحلة ومشاركة العملاء التفاعلية",
    lbl_traffic_index: "مؤشر مصادر الزوار وقيمتها المالية",
    lbl_th_source: "المصدر والقناة",
    lbl_th_visitors: "الزوار الشهريين",
    lbl_th_bounce: "معدل الارتداد المتوسط",
    lbl_th_value: "قيمة التحويلات المالية",
    lbl_th_trend: "اتجاه وتصنيف المصدر",
    lbl_active_campaigns_title: "منصة مراقبة الحملات النشطة",
    lbl_campaign_creator: "منشئ الحملات الإعلانية التفاعلية",
    lbl_campaign_headline: "اسم الحملة الإعلانية الرئيسي",
    lbl_platform_channel: "منصة القناة الإعلانية",
    lbl_discount_coupon: "نسبة خصم القسيمة",
    lbl_budget_allocation: "ميزانية الحملة المخصصة ($)",
    lbl_creative_color: "تنسيق ألوان التصميم",
    btn_launch_campaign: "إطلاق الحملة الترويجية الفورية",
    lbl_ad_preview: "استعراض الإعلان التفاعلي المباشر",
    lbl_ad_preview_desc:
      "راقب التغييرات الفورية للرسم الرقمي قبل بدء مجموعات الإعلانات الفعلية على الخادم.",
    lbl_compliance_badge: "إعلان مباشر",
    lbl_special_ad_offer: "عرض إعلاني خاص",
    lbl_shop_now: "تسوق الآن",
    lbl_guarantee_text:
      "* نضمن اجتياز فحص مطابقة الإعلانات لشبكات الاستهداف الديناميكية.",
    modal_add_cust_title: "تسجيل عميل جديد",
    modal_add_cust_subtitle:
      "إضافة ملف عميل جديد وتخزينه في قواعد بيانات اللوحة.",
    lbl_cust_fullname: "الاسم الكامل",
    lbl_cust_email: "البريد الإلكتروني",
    lbl_cust_status: "حالة الحساب المعتمدة",
    lbl_cust_spent: "إجمالي المشتريات والإنفاق ($)",
    btn_save_customer: "حفظ وتخزين بيانات العميل",
    btn_cancel: "إلغاء الأمر",
    btn_save: "حفظ المنتج",
    modal_add_title: "إنشاء منتج ذكي",
    modal_add_subtitle:
      "أضف منتجاً جديداً بالكامل إلى كتالوج شبكة المنتجات التفاعلية.",
    lbl_prod_title: "اسم المنتج",
    lbl_prod_price: "السعر ($)",
    lbl_prod_stock: "الكمية بالمخزن",
    lbl_prod_category: "الفئة",
    lbl_prod_img: "تنسيق ألوان الغلاف البصري",
    opt_instagram: "انستغرام - شبكة الخلاصة",
    opt_tiktok: "تيك توك - إعلان فيديو",
    opt_google: "إعلانات جوجل - شبكة البحث الممول",
    opt_grad_purple: "تدرج بنفسجي كلاسيكي ريترو",
    opt_grad_teal: "غابة النيون الخضراء والسيبرانية",
    opt_grad_pink: "غروب الشمس الساحر والوردي",
    opt_grad_blue: "البلازما الزرقاء العميقة والمحيطية",
    color_purple_haze: "ضباب بنفسجي",
    color_teal_forest: "غابة النيون الخضراء",
    color_pink_sunset: "غروب وردي ناصع",
    color_blue_plasma: "بلازما زرقاء متوهجة",
    btn_ship: "شحن الطلب",
    btn_deliver: "تسليم الطلب",
    month_jan: "يناير",
    month_feb: "فبراير",
    month_mar: "مارس",
    month_apr: "أبريل",
    month_may: "مايو",
    month_jun: "يونيو",
    month_jul: "يوليو",
    channel_organic: "حركة زوار طبيعية (Organic)",
    channel_paid: "حركة زوار مدفوعة وممولة",
    funnel_impressions: "مرات الظهور والأثر",
    funnel_engagement: "التفاعل والاهتمام",
    funnel_cart: "الإضافة إلى السلة",
    funnel_checkout: "مرحلة تسجيل الخروج",
    funnel_loyalty: "حلقة الولاء وتكرار الشراء",
    tier_platinum: "بلاتينيوم VIP الفاخر",
    tier_silver: "الفئة الفضية",
    tier_bronze: "الفئة البرونزية",
    acc_vip: "كبار الشخصيات VIP",
    acc_active: "حساب نشط وفعال",
    acc_inactive: "حساب خامل / غير نشط",
  },
};

// --- Mock Databases ---
let mockCampaigns = [
  {
    id: 1,
    name: "Neon Cyber Weekend",
    platform: "instagram",
    discount: 25,
    spent: 1200,
    budget: 3000,
    reach: 45200,
    ctr: 4.8,
    status: "active",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    name: "Winter Pulse Sale",
    platform: "tiktok",
    discount: 15,
    spent: 850,
    budget: 1500,
    reach: 28400,
    ctr: 5.2,
    status: "active",
    gradient: "from-teal-400 to-emerald-600",
  },
  {
    id: 3,
    name: "Aether VR Launch",
    platform: "google",
    discount: 10,
    spent: 2500,
    budget: 5000,
    reach: 98100,
    ctr: 3.9,
    status: "paused",
    gradient: "from-pink-500 to-rose-600",
  },
];

let mockProducts = [
  {
    id: 1,
    title: "Aether VR Headset",
    price: 549.99,
    stock: 12,
    maxStock: 30,
    category: "electronics",
    color: "from-purple-500 to-indigo-600",
    image: "",
  },
  {
    id: 2,
    title: "Quantum Smartwatch",
    price: 299.0,
    stock: 4,
    maxStock: 25,
    category: "electronics",
    color: "from-teal-400 to-emerald-600",
    image: "",
  },
  {
    id: 3,
    title: "Neon Cyber Keyboard",
    price: 189.5,
    stock: 21,
    maxStock: 50,
    category: "accessories",
    color: "from-pink-500 to-rose-600",
    image: "",
  },
  {
    id: 4,
    title: "Cosmo Obsidian Hoodie",
    price: 85.0,
    stock: 0,
    maxStock: 40,
    category: "clothing",
    color: "from-blue-500 to-cyan-500",
    image: "",
  },
];

let mockCustomers = [
  {
    id: "1001",
    name: "Sarah Smith",
    email: "sarah.smith@example.com",
    spent: 1250.0,
    orders: 12,
    status: "active",
    avatarColor: "14b8a6",
    notes: "Prefers email notifications only. High response rates.",
    rating: 4.8,
  },
  {
    id: "1002",
    name: "Ahmed Khaled",
    email: "ahmed.k@example.com",
    spent: 3450.5,
    orders: 28,
    status: "vip",
    avatarColor: "a855f7",
    notes: "Extremely loyal VIP. Fast checkout client.",
    rating: 5.0,
  },
  {
    id: "1003",
    name: "Mike Johnson",
    email: "mjohnson@example.com",
    spent: 45.5,
    orders: 1,
    status: "inactive",
    avatarColor: "ef4444",
    notes: "No checkout interactions since late 2024.",
    rating: 3.2,
  },
  {
    id: "1004",
    name: "Layla Ali",
    email: "layla.a@example.com",
    spent: 480.0,
    orders: 4,
    status: "active",
    avatarColor: "f59e0b",
    notes: "Interested in new smart devices drops.",
    rating: 4.5,
  },
  {
    id: "1005",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    spent: 5120.0,
    orders: 42,
    status: "vip",
    avatarColor: "3b82f6",
    notes: "Top buyer tier client. Direct priority delivery channel.",
    rating: 4.9,
  },
];

let mockOrders = [
  {
    id: "ORD-001",
    customerId: "1001",
    customer: "Sarah Smith",
    date: "Oct 12, 2023",
    amount: 120.0,
    status: "completed",
    avatarColor: "14b8a6",
  },
  {
    id: "ORD-002",
    customerId: "1003",
    customer: "Mike Johnson",
    date: "Oct 12, 2023",
    amount: 45.5,
    status: "processing",
    avatarColor: "ef4444",
  },
  {
    id: "ORD-003",
    customerId: "1002",
    customer: "Ahmed Khaled",
    date: "Oct 11, 2023",
    amount: 1540.0,
    status: "completed",
    avatarColor: "a855f7",
  },
  {
    id: "ORD-004",
    customerId: "1005",
    customer: "Emma Wilson",
    date: "Oct 10, 2023",
    amount: 320.0,
    status: "shipped",
    avatarColor: "3b82f6",
  },
  {
    id: "ORD-005",
    customerId: "1004",
    customer: "Layla Ali",
    date: "Oct 09, 2023",
    amount: 80.0,
    status: "cancelled",
    avatarColor: "f59e0b",
  },
];

// --- Safe Storage Wrappers (Fixes file:/// protocol errors) ---
function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("Local storage is disabled or blocked in this environment.");
  }
}

function safeGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

// --- Core Application Logic ---
function saveToStorage() {
  safeSetItem("basafer_products", JSON.stringify(mockProducts));
  safeSetItem("basafer_customers", JSON.stringify(mockCustomers));
  safeSetItem("basafer_orders", JSON.stringify(mockOrders));
  safeSetItem("basafer_campaigns", JSON.stringify(mockCampaigns));
}

function loadFromStorage() {
  // Only override defaults if stored array exists and is not empty
  const storedProds = safeGetItem("basafer_products");
  if (storedProds) {
    try {
      const parsed = JSON.parse(storedProds);
      if (Array.isArray(parsed) && parsed.length > 0) {
        mockProducts = parsed;
      }
    } catch (e) {
      console.error(e);
    }
  }

  const storedCusts = safeGetItem("basafer_customers");
  if (storedCusts) {
    try {
      const parsed = JSON.parse(storedCusts);
      if (Array.isArray(parsed) && parsed.length > 0) {
        mockCustomers = parsed;
      }
    } catch (e) {
      console.error(e);
    }
  }

  const storedOrders = safeGetItem("basafer_orders");
  if (storedOrders) {
    try {
      const parsed = JSON.parse(storedOrders);
      if (Array.isArray(parsed) && parsed.length > 0) {
        mockOrders = parsed;
      }
    } catch (e) {
      console.error(e);
    }
  }

  const storedCamps = safeGetItem("basafer_campaigns");
  if (storedCamps) {
    try {
      const parsed = JSON.parse(storedCamps);
      if (Array.isArray(parsed) && parsed.length > 0) {
        mockCampaigns = parsed;
      }
    } catch (e) {
      console.error(e);
    }
  }

  if (safeGetItem("basafer_admin_name")) {
    const name = safeGetItem("basafer_admin_name");
    const adminHeader = document.getElementById("header-admin-name");
    const adminSetting = document.getElementById("settings-admin-name");
    if (adminHeader) adminHeader.innerText = name;
    if (adminSetting) adminSetting.value = name;
  }

  if (safeGetItem("settings_notifications") !== null)
    document.getElementById("settings-notifications").checked =
      safeGetItem("settings_notifications") === "true";
  if (safeGetItem("settings_sound") !== null)
    document.getElementById("settings-sound").checked =
      safeGetItem("settings_sound") === "true";
  if (safeGetItem("settings_daily_digest") !== null)
    document.getElementById("settings-daily-digest").checked =
      safeGetItem("settings_daily_digest") === "true";
  if (safeGetItem("settings_backup") !== null)
    document.getElementById("settings-backup").checked =
      safeGetItem("settings_backup") === "true";
  if (safeGetItem("settings_mfa") !== null)
    document.getElementById("settings-mfa").checked =
      safeGetItem("settings_mfa") === "true";
  if (safeGetItem("settings_strict_session") !== null)
    document.getElementById("settings-strict-session").checked =
      safeGetItem("settings_strict_session") === "true";
  if (safeGetItem("settings_auto_theme") !== null)
    document.getElementById("settings-auto-theme").checked =
      safeGetItem("settings_auto_theme") === "true";
  if (safeGetItem("settings_animations") !== null)
    document.getElementById("settings-animations").checked =
      safeGetItem("settings_animations") === "true";
  if (safeGetItem("settings_stock_threshold") !== null)
    document.getElementById("settings-stock-threshold").value = safeGetItem(
      "settings_stock_threshold",
    );
  if (safeGetItem("settings_currency") !== null)
    document.getElementById("settings-currency").value =
      safeGetItem("settings_currency");
}

function showNotification(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  const borderColors =
    type === "success"
      ? "border-brand-teal text-brand-teal"
      : "border-red-500 text-red-500";

  toast.className = `glass-panel px-5 py-3 rounded-2xl border-l-4 ${borderColors} shadow-lg text-sm font-bold flex items-center gap-3 animate-bounce w-full`;
  toast.innerHTML = `
                <span class="w-2 h-2 rounded-full shrink-0 ${type === "success" ? "bg-brand-teal" : "bg-red-500"}"></span>
                <span>${message}</span>
            `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("opacity-0", "transition-all", "duration-500");
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");

  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    sidebar.classList.add(
      "flex",
      "fixed",
      "top-0",
      "bottom-0",
      "right-4",
      "h-[calc(100vh-2rem)]",
      "w-64",
    );
    backdrop.classList.remove("hidden");
  } else {
    sidebar.classList.add("hidden");
    sidebar.classList.remove(
      "flex",
      "fixed",
      "top-0",
      "bottom-0",
      "right-4",
      "h-[calc(100vh-2rem)]",
      "w-64",
    );
    backdrop.classList.add("hidden");
  }
}

function switchPage(pageId) {
  document
    .querySelectorAll(".page-content")
    .forEach((page) => page.classList.remove("active"));
  const targetPage = document.getElementById("page-" + pageId);
  if (targetPage) targetPage.classList.add("active");

  document.querySelectorAll("#sidebar-nav .nav-item").forEach((item) => {
    item.classList.remove("nav-item-active");
    const icon = item.querySelector("svg");
    if (icon) icon.classList.remove("nav-item-icon-active");
  });

  const activeLink = document.querySelector(`[data-page="${pageId}"]`);
  if (activeLink) {
    activeLink.classList.add("nav-item-active");
    const icon = activeLink.querySelector("svg");
    if (icon) icon.classList.add("nav-item-icon-active");
  }

  if (window.innerWidth < 1024) {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");
    sidebar.classList.add("hidden");
    sidebar.classList.remove(
      "flex",
      "fixed",
      "top-0",
      "bottom-0",
      "right-4",
      "h-[calc(100vh-2rem)]",
      "w-64",
    );
    backdrop.classList.add("hidden");
  }

  if (pageId === "dashboard") {
    renderDashboardOrders();
  } else if (pageId === "products") {
    renderProducts();
  } else if (pageId === "orders") {
    renderOrdersPage();
  } else if (pageId === "customer_details") {
    populateCustomerDetailsSelector();
  } else if (pageId === "customers") {
    renderCustomers();
  } else if (pageId === "analytics") {
    setTimeout(initAnalyticsCharts, 50);
  } else if (pageId === "marketing") {
    renderCampaigns();
    updateAdPreview();
  }
}

function toggleTheme() {
  const htmlElement = document.documentElement;
  const isDark = htmlElement.classList.contains("dark");

  if (isDark) {
    htmlElement.classList.remove("dark");
    updateChartsTheme("light");
  } else {
    htmlElement.classList.add("dark");
    updateChartsTheme("dark");
  }
  renderProducts();
}

function setLanguage(targetLang) {
  const htmlElement = document.documentElement;
  htmlElement.setAttribute("lang", targetLang);
  htmlElement.setAttribute("dir", targetLang === "ar" ? "rtl" : "ltr");

  const langText = document.getElementById("lang-text");
  if (langText) langText.innerText = targetLang === "ar" ? "EN" : "AR";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[targetLang] && translations[targetLang][key]) {
      el.innerText = translations[targetLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[targetLang] && translations[targetLang][key]) {
      el.setAttribute("placeholder", translations[targetLang][key]);
    }
  });

  Chart.defaults.font.family =
    targetLang === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif";

  renderProducts();
  renderCustomers();
  renderDashboardOrders();
  renderOrdersPage();

  if (revenueChart) {
    revenueChart.destroy();
    categoryChart.destroy();
  }
  initCharts();

  if (analyticsAcquisitionChart) {
    initAnalyticsCharts();
  }
}

function toggleLanguage() {
  const htmlElement = document.documentElement;
  const currentLang = htmlElement.getAttribute("lang") || "en";
  const targetLang = currentLang === "en" ? "ar" : "en";
  safeSetItem("basafer_lang", targetLang);
  setLanguage(targetLang);
}

function renderProducts(filteredList = null) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const list = filteredList || mockProducts;
  const isRtl = document.documentElement.getAttribute("dir") === "rtl";
  const currentLang = document.documentElement.getAttribute("lang") || "en";

  grid.innerHTML = "";

  list.forEach((p) => {
    const isOutOfStock = p.stock === 0;
    const percent = Math.min((p.stock / p.maxStock) * 100, 100);

    let glowColor = "bg-brand-teal";
    let stateText = isRtl ? "متوفر" : "In Stock";
    if (isOutOfStock) {
      glowColor = "bg-red-500";
      stateText = isRtl ? "نفذت الكمية" : "Out of Stock";
    } else if (p.stock <= 5) {
      glowColor = "bg-amber-500";
      stateText = isRtl ? "كمية محدودة" : "Low Stock";
    }

    const coverStyle = p.image
      ? `<img src="${p.image}" class="w-full h-full object-cover relative z-10">`
      : `<span class="text-white font-extrabold text-lg drop-shadow-md z-10 select-none px-4 text-center break-words">${p.title}</span>`;

    const cardHTML = `
                    <div class="glass-card overflow-hidden flex flex-col relative group">
                        <div class="h-44 bg-gradient-to-tr ${p.color} relative overflow-hidden flex items-center justify-center">
                            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                            <div class="w-32 h-32 rounded-full bg-white/10 blur-xl opacity-70 absolute scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                            ${coverStyle}
                            <span class="absolute top-4 left-4 rtl:right-4 rtl:left-auto bg-black/40 text-white/90 text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-md z-20 whitespace-nowrap">
                                ${p.category.toUpperCase()}
                            </span>
                        </div>
                        <div class="p-6 flex flex-col flex-grow gap-4">
                            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left rtl:sm:text-right gap-2">
                                <h4 class="text-lg font-bold text-gray-800 dark:text-white break-words">${p.title}</h4>
                                <span class="text-xl font-extrabold text-brand-purple dark:text-brand-teal shrink-0">$${p.price.toFixed(2)}</span>
                            </div>
                            <div class="space-y-1.5">
                                <div class="flex justify-between text-xs text-gray-500 font-medium">
                                    <span>${p.stock} / ${p.maxStock} ${isRtl ? "القطع المتبقية" : "Items Remaining"}</span>
                                    <span class="flex items-center gap-1">
                                        <span class="w-2 h-2 rounded-full ${glowColor} inline-block animate-pulse shrink-0"></span>
                                        ${stateText}
                                    </span>
                                </div>
                                <div class="w-full h-1.5 bg-gray-200/50 dark:bg-white/5 rounded-full overflow-hidden">
                                    <div class="h-full ${glowColor} rounded-full transition-all duration-500" style="width: ${percent}%"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center bg-gray-100/50 dark:bg-white/5 px-3 py-1.5 rounded-xl text-xs w-full">
                                <span class="text-gray-400 whitespace-nowrap">Quick Stock:</span>
                                <div class="flex items-center gap-2">
                                    <button onclick="changeStock(${p.id}, -1)" class="w-6 h-6 rounded bg-gray-200 dark:bg-white/10 flex items-center justify-center font-bold text-gray-600 dark:text-white hover:bg-brand-purple hover:text-white transition-all shrink-0">-</button>
                                    <span class="font-bold text-gray-800 dark:text-white">${p.stock}</span>
                                    <button onclick="changeStock(${p.id}, 1)" class="w-6 h-6 rounded bg-gray-200 dark:bg-white/10 flex items-center justify-center font-bold text-gray-600 dark:text-white hover:bg-brand-teal hover:text-white transition-all shrink-0">+</button>
                                </div>
                            </div>
                            <div class="flex gap-2 pt-2 border-t border-gray-100 dark:border-white/5 mt-auto">
                                <button onclick="deleteProduct(${p.id})" class="flex-1 py-2.5 rounded-xl border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all text-xs font-semibold whitespace-nowrap">
                                    ${translations[currentLang]["btn_cancel"] || "Delete"}
                                </button>
                                <button onclick="openModal(${p.id})" class="flex-1 py-2.5 rounded-xl bg-gray-100/50 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-xs font-semibold whitespace-nowrap">
                                    ${translations[currentLang]["lbl_prod_action_edit"] || "Edit"}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
    grid.innerHTML += cardHTML;
  });
}

function changeStock(id, val) {
  const prod = mockProducts.find((p) => p.id === id);
  if (prod) {
    prod.stock = Math.max(0, prod.stock + val);
    saveToStorage();
    renderProducts();
    showNotification(`Stock for ${prod.title} updated successfully!`);
  }
}

function generateInstantPromo() {
  const prefix = document.getElementById("promoCodePrefix").value || "basafer";
  const randomCode =
    prefix.toUpperCase() + "-" + Math.floor(1000 + Math.random() * 9000);
  showNotification(
    `Code generated: ${randomCode} (copied to clipboard!)`,
    "success",
  );
  const el = document.createElement("textarea");
  el.value = randomCode;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

function filterProducts() {
  const searchVal = document
    .getElementById("productSearch")
    .value.toLowerCase();
  const catVal = document.getElementById("categoryFilter").value;

  const results = mockProducts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchVal);
    const matchesCategory = catVal === "all" || p.category === catVal;
    return matchesSearch && matchesCategory;
  });

  renderProducts(results);
}

function renderCustomers(filteredList = null) {
  const tbody = document.getElementById("customers-tbody");
  if (!tbody) return;
  const list = filteredList || mockCustomers;
  const currentLang = document.documentElement.getAttribute("lang") || "en";

  tbody.innerHTML = "";

  list.forEach((c) => {
    let statusGlow = "bg-gray-500";
    let statusBg = "bg-gray-500/10";
    let statusTextClass = "text-gray-500 dark:text-gray-400";
    let statusLabel = c.status;

    if (c.status === "active") {
      statusGlow = "bg-brand-teal";
      statusBg = "bg-brand-teal/10";
      statusTextClass = "text-brand-teal";
      statusLabel = translations[currentLang]["opt_active"] || "Active";
    } else if (c.status === "vip") {
      statusGlow = "bg-brand-purple";
      statusBg = "bg-brand-purple/10";
      statusTextClass = "text-brand-purple";
      statusLabel = translations[currentLang]["opt_vip"] || "VIP";
    } else if (c.status === "inactive") {
      statusGlow = "bg-red-500";
      statusBg = "bg-red-500/10";
      statusTextClass = "text-red-500";
      statusLabel = translations[currentLang]["opt_inactive"] || "Inactive";
    }

    let starRating = "";
    const cleanRating = Math.round(c.rating || 4);
    for (let i = 0; i < 5; i++) {
      if (i < cleanRating) {
        starRating += '<span class="text-amber-500">★</span>';
      } else {
        starRating += '<span class="text-gray-300 dark:text-gray-700">★</span>';
      }
    }

    const tr = document.createElement("tr");
    tr.className =
      "transition-colors group hover:bg-gray-50 dark:hover:bg-white/5";
    tr.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center gap-3">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=${c.avatarColor}&color=fff" class="w-10 h-10 rounded-full shadow-sm border border-gray-200 dark:border-white/10 shrink-0">
                            <div>
                                <div class="font-bold text-gray-800 dark:text-white">${c.name}</div>
                                <div class="text-xs text-gray-500">#CUST-${c.id}</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">${c.email}</td>
                    <td class="px-6 py-4 font-bold text-gray-800 dark:text-white whitespace-nowrap">$${c.spent.toFixed(2)}</td>
                    <td class="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">${c.orders}</td>
                    <td class="px-6 py-4 font-bold text-gray-800 dark:text-white whitespace-nowrap">
                        <div class="flex items-center gap-1">${starRating}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${statusBg} ${statusTextClass} border border-current/20">
                            <span class="w-1.5 h-1.5 rounded-full ${statusGlow} ${c.status === "active" ? "animate-pulse" : ""}"></span>
                            ${statusLabel}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex gap-2">
                            <button onclick="switchPage('customer_details'); loadCustomerProfile('${c.id}');" class="p-2 rounded-lg bg-gray-100/50 dark:bg-white/5 text-brand-teal hover:bg-brand-teal hover:text-white transition-colors" title="View Details">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </button>
                        </div>
                    </td>
                `;
    tbody.appendChild(tr);
  });
}

function triggerBulkEmail() {
  showNotification(
    "Simulating Promo Dispatch for Active/VIP client lists...",
    "success",
  );
  setTimeout(() => {
    showNotification(
      "Mailing server successfully transmitted 5 promotional campaign coupons!",
      "success",
    );
  }, 1000);
}

function filterCustomers() {
  const searchVal = document
    .getElementById("customerSearch")
    .value.toLowerCase();
  const statusVal = document.getElementById("customerStatusFilter").value;

  const results = mockCustomers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchVal) ||
      c.email.toLowerCase().includes(searchVal);
    const matchesStatus = statusVal === "all" || c.status === statusVal;
    return matchesSearch && matchesStatus;
  });

  renderCustomers(results);
}

function renderDashboardOrders() {
  const tbody = document.getElementById("dashboard-recent-orders-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const recent = mockOrders.slice(0, 5);
  const currentLang = document.documentElement.getAttribute("lang") || "en";

  recent.forEach((o) => {
    let badgeClass = getStatusBadgeClasses(o.status);
    tbody.innerHTML += `
                    <tr class="transition-colors group hover:bg-gray-50 dark:hover:bg-white/5">
                        <td class="px-6 py-4 font-bold text-gray-800 dark:text-white whitespace-nowrap">${o.id}</td>
                        <td class="px-6 py-4 flex items-center gap-3 whitespace-nowrap">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(o.customer)}&background=${o.avatarColor}&color=fff" class="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 shrink-0">
                            ${o.customer}
                        </td>
                        <td class="px-6 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">${o.date}</td>
                        <td class="px-6 py-4 font-bold text-gray-800 dark:text-white whitespace-nowrap">$${o.amount.toFixed(2)}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${badgeClass}">
                                ${translations[currentLang]["status_" + o.status]}
                            </span>
                        </td>
                    </tr>
                `;
  });
}

function renderOrdersPage(filteredList = null) {
  const tbody = document.getElementById("orders-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const list = filteredList || mockOrders;
  const currentLang = document.documentElement.getAttribute("lang") || "en";

  const shipText = translations[currentLang]["btn_ship"] || "Ship";
  const deliverText = translations[currentLang]["btn_deliver"] || "Deliver";
  const cancelText = translations[currentLang]["status_cancelled"] || "Cancel";

  list.forEach((o) => {
    let badgeClass = getStatusBadgeClasses(o.status);
    tbody.innerHTML += `
                    <tr class="transition-colors group hover:bg-gray-50 dark:hover:bg-white/5">
                        <td class="px-6 py-4 font-bold text-gray-800 dark:text-white whitespace-nowrap">${o.id}</td>
                        <td class="px-6 py-4 flex items-center gap-3 whitespace-nowrap">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(o.customer)}&background=${o.avatarColor}&color=fff" class="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 shrink-0">
                            ${o.customer}
                        </td>
                        <td class="px-6 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">${o.date}</td>
                        <td class="px-6 py-4 font-bold text-gray-800 dark:text-white whitespace-nowrap">$${o.amount.toFixed(2)}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${badgeClass}">
                                ${translations[currentLang]["status_" + o.status]}
                            </span>
                        </td>
                        <td class="px-6 py-4 text-xs whitespace-nowrap">
                            <div class="flex gap-2">
                                <button onclick="updateOrderStatus('${o.id}', 'shipped')" class="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-semibold">
                                    ${shipText}
                                </button>
                                <button onclick="updateOrderStatus('${o.id}', 'completed')" class="px-3 py-1.5 rounded-lg bg-brand-teal/10 text-brand-teal hover:bg-brand-teal hover:text-white transition-all font-semibold">
                                    ${deliverText}
                                </button>
                                <button onclick="updateOrderStatus('${o.id}', 'cancelled')" class="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all font-semibold">
                                    ${cancelText}
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
  });
  document.getElementById("sidebar-orders-badge").innerText = mockOrders.filter(
    (o) => o.status === "processing" || o.status === "shipped",
  ).length;
}

function getStatusBadgeClasses(status) {
  if (status === "completed")
    return "bg-brand-teal/10 text-brand-teal border border-brand-teal/20";
  if (status === "processing")
    return "bg-amber-500/10 text-amber-500 border border-amber-500/20";
  if (status === "shipped")
    return "bg-blue-500/10 text-blue-500 border border-blue-500/20";
  return "bg-red-500/10 text-red-500 border border-red-500/20";
}

function filterOrders() {
  const query = document.getElementById("orderSearch").value.toLowerCase();
  const state = document.getElementById("orderStatusFilter").value;

  const filtered = mockOrders.filter((o) => {
    const matchesSearch =
      o.id.toLowerCase().includes(query) ||
      o.customer.toLowerCase().includes(query);
    const matchesStatus = state === "all" || o.status === state;
    return matchesSearch && matchesStatus;
  });
  renderOrdersPage(filtered);
}

function updateOrderStatus(orderId, newStatus) {
  const order = mockOrders.find((o) => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveToStorage();
    showNotification(
      `Order ${orderId} status changed to ${newStatus}!`,
      "success",
    );
    renderOrdersPage();
    renderDashboardOrders();
  }
}

function populateCustomerDetailsSelector() {
  const selector = document.getElementById("customer-profile-selector");
  if (!selector) return;
  selector.innerHTML = "";
  mockCustomers.forEach((c) => {
    selector.innerHTML += `<option value="${c.id}">${c.name}</option>`;
  });
  loadCustomerProfile(mockCustomers[0].id);
}

function loadCustomerProfile(customerId) {
  const customer = mockCustomers.find((c) => c.id === customerId);
  if (!customer) return;

  document.getElementById("cd-name").innerText = customer.name;
  document.getElementById("cd-id").innerText = `#CUST-${customer.id}`;
  document.getElementById("cd-email").innerText = customer.email;
  document.getElementById("cd-orders").innerText = customer.orders;
  document.getElementById("cd-spent").innerText =
    `$${customer.spent.toFixed(2)}`;
  document.getElementById("cd-notes").value = customer.notes || "";
  document.getElementById("cd-avatar-container").innerHTML = `
                <div class="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name)}&background=${customer.avatarColor}&color=fff" class="w-full h-full object-cover">
                </div>
            `;

  const currentLang = document.documentElement.getAttribute("lang") || "en";
  const statusEl = document.getElementById("cd-status");
  if (customer.status === "vip") {
    statusEl.innerText = translations[currentLang]["acc_vip"] || "VIP Member";
    statusEl.className =
      "px-3 py-1 rounded-full text-xs font-bold bg-brand-purple/10 text-brand-purple border border-brand-purple/20 whitespace-nowrap";
    document.getElementById("cd-tier").innerText =
      translations[currentLang]["tier_platinum"] || "Platinum VIP";
  } else if (customer.status === "active") {
    statusEl.innerText =
      translations[currentLang]["acc_active"] || "Active Account";
    statusEl.className =
      "px-3 py-1 rounded-full text-xs font-bold bg-brand-teal/10 text-brand-teal border border-brand-teal/20 whitespace-nowrap";
    document.getElementById("cd-tier").innerText =
      translations[currentLang]["tier_silver"] || "Silver Tier";
  } else {
    statusEl.innerText =
      translations[currentLang]["acc_inactive"] || "Inactive Account";
    statusEl.className =
      "px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-500 border border-red-500/20 whitespace-nowrap";
    document.getElementById("cd-tier").innerText =
      translations[currentLang]["tier_bronze"] || "Bronze Tier";
  }

  const avgTicket = customer.spent / (customer.orders || 1);
  document.getElementById("cd-average").innerText = `$${avgTicket.toFixed(2)}`;

  const dropdown = document.getElementById("customer-profile-selector");
  if (dropdown) dropdown.value = customerId;
}

function saveCustomerNote() {
  const selector = document.getElementById("customer-profile-selector");
  const noteText = document.getElementById("cd-notes").value;
  const customer = mockCustomers.find((c) => c.id === selector.value);
  if (customer) {
    customer.notes = noteText;
    showNotification("Customer notes updated successfully!", "success");
  }
}

function saveGlobalSettings(e) {
  e.preventDefault();
  const newAdminName = document.getElementById("settings-admin-name").value;
  document.getElementById("header-admin-name").innerText = newAdminName;
  safeSetItem("basafer_admin_name", newAdminName);

  safeSetItem(
    "settings_notifications",
    document.getElementById("settings-notifications").checked,
  );
  safeSetItem(
    "settings_sound",
    document.getElementById("settings-sound").checked,
  );
  safeSetItem(
    "settings_daily_digest",
    document.getElementById("settings-daily-digest").checked,
  );
  safeSetItem(
    "settings_backup",
    document.getElementById("settings-backup").checked,
  );
  safeSetItem("settings_mfa", document.getElementById("settings-mfa").checked);
  safeSetItem(
    "settings_strict_session",
    document.getElementById("settings-strict-session").checked,
  );
  safeSetItem(
    "settings_auto_theme",
    document.getElementById("settings-auto-theme").checked,
  );
  safeSetItem(
    "settings_animations",
    document.getElementById("settings-animations").checked,
  );
  safeSetItem(
    "settings_stock_threshold",
    document.getElementById("settings-stock-threshold").value,
  );
  safeSetItem(
    "settings_currency",
    document.getElementById("settings-currency").value,
  );

  showNotification(
    "Global operational parameters stored successfully!",
    "success",
  );
}

function openModal(productId = null) {
  const modal = document.getElementById("addProductModal");
  const form = document.getElementById("productForm");
  const titleEl = document.getElementById("modalProductTitle");
  const subtitleEl = document.getElementById("modalProductSubtitle");

  const currentLang = document.documentElement.getAttribute("lang") || "en";

  form.reset();
  document.getElementById("editProdId").value = "";

  if (productId) {
    const prod = mockProducts.find((p) => p.id === productId);
    if (prod) {
      document.getElementById("editProdId").value = prod.id;
      document.getElementById("newProdTitle").value = prod.title;
      document.getElementById("newProdPrice").value = prod.price;
      document.getElementById("newProdStock").value = prod.stock;
      document.getElementById("newProdCategory").value = prod.category;
      document.getElementById("newProdColor").value = prod.color;

      titleEl.innerText =
        currentLang === "ar" ? "تعديل منتج سيبراني" : "Edit Cyber Product";
      subtitleEl.innerText =
        currentLang === "ar"
          ? "تعديل تفاصيل هذا العنصر النشط."
          : "Update details of this active dynamic catalog item.";
    }
  } else {
    titleEl.innerText =
      translations[currentLang]["modal_add_title"] || "Create Cyber Product";
    subtitleEl.innerText =
      translations[currentLang]["modal_add_subtitle"] ||
      "Add a brand new item into your interactive grid catalog.";
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    modal.querySelector(".glass-panel").classList.remove("scale-95");
    modal.querySelector(".glass-panel").classList.add("scale-100");
  }, 10);
}

function closeModal() {
  const modal = document.getElementById("addProductModal");
  modal.querySelector(".glass-panel").classList.remove("scale-100");
  modal.querySelector(".glass-panel").classList.add("scale-95");
  setTimeout(() => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    document.getElementById("productForm").reset();
  }, 150);
}

function saveProduct(e) {
  e.preventDefault();
  const editId = document.getElementById("editProdId").value;
  const title = document.getElementById("newProdTitle").value;
  const price = parseFloat(document.getElementById("newProdPrice").value);
  const stock = parseInt(document.getElementById("newProdStock").value);
  const category = document.getElementById("newProdCategory").value;
  const color = document.getElementById("newProdColor").value;
  const imageInput = document.getElementById("newProdImage");

  const saveAction = (imgData = "") => {
    if (editId) {
      const prod = mockProducts.find((p) => p.id == editId);
      if (prod) {
        prod.title = title;
        prod.price = price;
        prod.stock = stock;
        prod.maxStock = Math.max(prod.maxStock, stock * 2);
        prod.category = category;
        prod.color = color;
        if (imgData) prod.image = imgData;
      }
      showNotification("Product updated successfully!", "success");
    } else {
      const newProduct = {
        id: Date.now(),
        title,
        price,
        stock,
        maxStock: stock * 2 || 20,
        category,
        color,
        image: imgData,
      };
      mockProducts.unshift(newProduct);
      showNotification("New high-tech product added successfully!", "success");
    }
    saveToStorage();
    renderProducts();
    closeModal();
  };

  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (event) {
      saveAction(event.target.result);
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    saveAction("");
  }
}

function deleteProduct(id) {
  mockProducts = mockProducts.filter((p) => p.id !== id);
  saveToStorage();
  renderProducts();
  showNotification("Product removed from catalog.", "success");
}

function openCustomerModal() {
  const modal = document.getElementById("addCustomerModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    modal.querySelector(".glass-panel").classList.remove("scale-95");
    modal.querySelector(".glass-panel").classList.add("scale-100");
  }, 10);
}

function closeCustomerModal() {
  const modal = document.getElementById("addCustomerModal");
  modal.querySelector(".glass-panel").classList.remove("scale-100");
  modal.querySelector(".glass-panel").classList.add("scale-95");
  setTimeout(() => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    document.getElementById("customerForm").reset();
  }, 150);
}

function saveCustomer(e) {
  e.preventDefault();
  const name = document.getElementById("custName").value;
  const email = document.getElementById("custEmail").value;
  const status = document.getElementById("custStatus").value;
  const spent = parseFloat(document.getElementById("custSpent").value);

  const colors = ["14b8a6", "a855f7", "3b82f6", "ef4444", "f59e0b"];
  const randColor = colors[Math.floor(Math.random() * colors.length)];

  const newCustomer = {
    id: (1000 + mockCustomers.length + 1).toString(),
    name,
    email,
    spent,
    orders: Math.floor(spent / 100) || 1,
    status,
    avatarColor: randColor,
    notes: "New dynamic operational profile created via Admin panel.",
    rating: 4.5,
  };

  mockCustomers.unshift(newCustomer);
  saveToStorage();
  renderCustomers();
  showNotification("Customer added successfully!", "success");
  closeCustomerModal();
}

function renderCampaigns() {
  const grid = document.getElementById("campaigns-grid");
  if (!grid) return;
  const currentLang = document.documentElement.getAttribute("lang") || "en";
  grid.innerHTML = "";

  mockCampaigns.forEach((c) => {
    const progress = (c.spent / c.budget) * 100;
    const statusColor =
      c.status === "active" ? "bg-brand-teal" : "bg-amber-500";
    const statusText =
      c.status === "active"
        ? translations[currentLang]["opt_active"] || "Active"
        : translations[currentLang]["status_cancelled"] || "Paused";
    const reachText =
      translations[currentLang]["lbl_live_traffic_pulse"] || "Reach";
    const spentText = currentLang === "ar" ? "المنفق" : "Spent";
    const budgetText = currentLang === "ar" ? "الميزانية" : "Budget";

    grid.innerHTML += `
                    <div class="glass-card overflow-hidden flex flex-col relative group p-5 space-y-4 border border-white/5">
                        <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left rtl:sm:text-right gap-3">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-gradient-to-tr ${c.gradient} flex items-center justify-center text-white font-extrabold text-sm shadow-md shrink-0">
                                    ${c.discount}%
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-800 dark:text-white group-hover:text-brand-purple transition-colors break-words">${c.name}</h4>
                                    <p class="text-xs text-gray-400 flex items-center justify-center sm:justify-start gap-1.5 capitalize mt-0.5">
                                        <span class="w-2 h-2 rounded-full ${statusColor} shrink-0"></span>
                                        ${statusText} • ${c.platform}
                                    </p>
                                </div>
                            </div>
                            <button onclick="toggleCampaignStatus(${c.id})" class="p-2 rounded-lg bg-gray-100/50 dark:bg-white/5 text-gray-400 hover:text-brand-purple hover:bg-brand-purple/10 transition-all shrink-0">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </button>
                        </div>
                        
                        <div class="grid grid-cols-3 gap-2 bg-gray-100/50 dark:bg-white/5 p-3 rounded-xl text-center text-xs">
                            <div>
                                <p class="text-gray-400 text-[10px]">${reachText}</p>
                                <p class="font-bold text-gray-800 dark:text-white mt-0.5">${c.reach > 0 ? (c.reach / 1000).toFixed(1) + "k" : "0"}</p>
                            </div>
                            <div>
                                <p class="text-gray-400 text-[10px]">CTR</p>
                                <p class="font-bold text-brand-teal mt-0.5">${c.ctr}%</p>
                            </div>
                            <div>
                                <p class="text-gray-400 text-[10px]">${budgetText}</p>
                                <p class="font-bold text-gray-800 dark:text-white mt-0.5">$${c.budget}</p>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <div class="flex justify-between text-xs text-gray-400">
                                <span>${spentText}: $${c.spent}</span>
                                <span>${progress.toFixed(0)}%</span>
                            </div>
                            <div class="w-full h-1.5 bg-gray-200/50 dark:bg-white/5 rounded-full overflow-hidden">
                                <div class="h-full bg-brand-purple rounded-full transition-all duration-500" style="width: ${progress}%"></div>
                            </div>
                        </div>
                    </div>
                `;
  });
}

function toggleCampaignStatus(id) {
  const camp = mockCampaigns.find((c) => c.id === id);
  if (camp) {
    camp.status = camp.status === "active" ? "paused" : "active";
    saveToStorage();
    renderCampaigns();
    showNotification(`Campaign "${camp.name}" toggled!`, "success");
  }
}

function updateAdPreview() {
  const nameInput = document.getElementById("campBuilderName");
  const discountInput = document.getElementById("campBuilderDiscount");
  if (!nameInput || !discountInput) return;

  const name = nameInput.value || "Cyber Horizon Launch";
  const discount = discountInput.value || "20";
  const platform = document.getElementById("campBuilderPlatform").value;
  const color = document.getElementById("campBuilderColor").value;

  const previewBg = document.getElementById("adPreviewBg");
  const previewName = document.getElementById("adPreviewName");
  const previewDiscount = document.getElementById("adPreviewDiscount");
  const previewPlatform = document.getElementById("adPreviewPlatform");

  if (previewBg)
    previewBg.className = `w-full h-48 bg-gradient-to-tr ${color} rounded-2xl relative overflow-hidden flex flex-col justify-between p-6 shadow-lg border border-white/10 text-left`;
  if (previewName) previewName.innerText = name;
  if (previewDiscount) previewDiscount.innerText = `${discount}% OFF`;
  if (previewPlatform)
    previewPlatform.innerText = platform.toUpperCase() + " CHANNEL";
}

function launchCampaign(e) {
  e.preventDefault();
  const name = document.getElementById("campBuilderName").value;
  const discount = parseInt(
    document.getElementById("campBuilderDiscount").value,
  );
  const platform = document.getElementById("campBuilderPlatform").value;
  const color = document.getElementById("campBuilderColor").value;
  const budget =
    parseInt(document.getElementById("campBuilderBudget").value) || 1000;

  const newCamp = {
    id: Date.now(),
    name,
    platform,
    discount,
    spent: 0,
    budget,
    reach: 0,
    ctr: 0.0,
    status: "active",
    gradient: color,
  };

  mockCampaigns.unshift(newCamp);
  saveToStorage();
  renderCampaigns();
  showNotification("Dynamic campaign ad-set generated & launched!", "success");
  document.getElementById("campBuilderForm").reset();
  updateAdPreview();
}

// --- 9. Charts Initializer ---
let revenueChart, categoryChart;
let analyticsAcquisitionChart, analyticsFunnelChart;

function initAnalyticsCharts() {
  const isDark = document.documentElement.classList.contains("dark");
  const textColor = isDark ? "#9ca3af" : "#64748b";
  const gridColor = isDark
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(0, 0, 0, 0.05)";
  const tooltipBg = isDark
    ? "rgba(17, 24, 39, 0.9)"
    : "rgba(255, 255, 255, 0.9)";
  const tooltipText = isDark ? "#fff" : "#1e293b";

  if (analyticsAcquisitionChart) analyticsAcquisitionChart.destroy();
  if (analyticsFunnelChart) analyticsFunnelChart.destroy();

  const ctxAcq = document.getElementById("analyticsAcquisitionChart");
  if (ctxAcq) {
    analyticsAcquisitionChart = new Chart(ctxAcq.getContext("2d"), {
      type: "bar",
      data: {
        labels: [
          "Google Organic",
          "Instagram Ads",
          "Direct URL",
          "TikTok Referrals",
          "Others",
        ],
        datasets: [
          {
            label: "Visitors",
            data: [45100, 32800, 18500, 12400, 6200],
            backgroundColor: [
              "#a855f7",
              "#14b8a6",
              "#3b82f6",
              "#f59e0b",
              "#ec4899",
            ],
            borderRadius: 12,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: tooltipBg,
            titleColor: tooltipText,
            bodyColor: tooltipText,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: gridColor, drawBorder: false },
          },
          x: { grid: { display: false, drawBorder: false } },
        },
      },
    });
  }

  const currentLang = document.documentElement.getAttribute("lang") || "en";
  const organicText =
    translations[currentLang]["channel_organic"] || "Organic Traffic";
  const paidText = translations[currentLang]["channel_paid"] || "Paid Traffic";
  const impressionsLabel =
    translations[currentLang]["funnel_impressions"] || "Impressions";
  const engagementLabel =
    translations[currentLang]["funnel_engagement"] || "Engagement";
  const cartLabel =
    translations[currentLang]["funnel_cart"] || "Cart Conversion";
  const checkoutLabel =
    translations[currentLang]["funnel_checkout"] || "Checkout Step";
  const loyaltyLabel =
    translations[currentLang]["funnel_loyalty"] || "Loyal Loop";

  const ctxFunnel = document.getElementById("analyticsFunnelChart");
  if (ctxFunnel) {
    analyticsFunnelChart = new Chart(ctxFunnel.getContext("2d"), {
      type: "radar",
      data: {
        labels: [
          impressionsLabel,
          engagementLabel,
          cartLabel,
          checkoutLabel,
          loyaltyLabel,
        ],
        datasets: [
          {
            label: organicText,
            data: [90, 75, 55, 45, 60],
            borderColor: "#a855f7",
            backgroundColor: "rgba(168, 85, 247, 0.1)",
            borderWidth: 2,
            pointRadius: 3,
          },
          {
            label: paidText,
            data: [80, 85, 70, 50, 40],
            borderColor: "#14b8a6",
            backgroundColor: "rgba(20, 184, 166, 0.1)",
            borderWidth: 2,
            pointRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: textColor, usePointStyle: true },
          },
          tooltip: {
            backgroundColor: tooltipBg,
            titleColor: tooltipText,
            bodyColor: tooltipText,
          },
        },
        scales: {
          r: {
            grid: { color: gridColor },
            angleLines: { color: gridColor },
            pointLabels: { color: textColor },
            ticks: { backdropColor: "transparent", color: textColor },
          },
        },
      },
    });
  }
}

function initCharts() {
  const isDark = document.documentElement.classList.contains("dark");
  const textColor = isDark ? "#9ca3af" : "#64748b";
  const gridColor = isDark
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(0, 0, 0, 0.05)";
  const tooltipBg = isDark
    ? "rgba(17, 24, 39, 0.9)"
    : "rgba(255, 255, 255, 0.9)";
  const tooltipText = isDark ? "#fff" : "#1e293b";

  Chart.defaults.color = textColor;
  Chart.defaults.font.family = "'Inter', sans-serif";

  const currentLang = document.documentElement.getAttribute("lang") || "en";

  const months = [
    translations[currentLang]["month_jan"] || "Jan",
    translations[currentLang]["month_feb"] || "Feb",
    translations[currentLang]["month_mar"] || "Mar",
    translations[currentLang]["month_apr"] || "Apr",
    translations[currentLang]["month_may"] || "May",
    translations[currentLang]["month_jun"] || "Jun",
    translations[currentLang]["month_jul"] || "Jul",
  ];

  const categoryLabels = [
    translations[currentLang]["opt_electronics"] || "Electronics",
    translations[currentLang]["opt_clothing"] || "Clothing",
    translations[currentLang]["opt_accessories"] || "Accessories",
    currentLang === "ar" ? "أخرى" : "Others",
  ];

  const ctxRevenue = document.getElementById("revenueChart");
  if (ctxRevenue) {
    const gradientPurple = ctxRevenue
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 400);
    gradientPurple.addColorStop(0, "rgba(168, 85, 247, 0.4)");
    gradientPurple.addColorStop(1, "rgba(168, 85, 247, 0.0)");

    revenueChart = new Chart(ctxRevenue.getContext("2d"), {
      type: "line",
      data: {
        labels: months,
        datasets: [
          {
            label: currentLang === "ar" ? "الإيرادات" : "Revenue",
            data: [12000, 19000, 15000, 22000, 18000, 28000, 24500],
            borderColor: "#a855f7",
            backgroundColor: gradientPurple,
            borderWidth: 3,
            pointBackgroundColor: "#14b8a6",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: tooltipBg,
            titleColor: tooltipText,
            bodyColor: tooltipText,
            borderColor: "rgba(168, 85, 247, 0.3)",
            borderWidth: 1,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: gridColor, drawBorder: false },
          },
          x: { grid: { display: false, drawBorder: false } },
        },
      },
    });
  }

  const ctxCategory = document.getElementById("categoryChart");
  if (ctxCategory) {
    categoryChart = new Chart(ctxCategory.getContext("2d"), {
      type: "doughnut",
      data: {
        labels: categoryLabels,
        datasets: [
          {
            data: [45, 25, 20, 10],
            backgroundColor: ["#a855f7", "#14b8a6", "#3b82f6", "#94a3b8"],
            borderWidth: isDark ? 0 : 2,
            borderColor: isDark ? "transparent" : "#ffffff",
            hoverOffset: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "75%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              color: textColor,
              padding: 15,
            },
          },
          tooltip: {
            backgroundColor: tooltipBg,
            titleColor: tooltipText,
            bodyColor: tooltipText,
          },
        },
      },
    });
  }
}

function updateChartsTheme(theme) {
  const isDark = theme === "dark";
  const textColor = isDark ? "#9ca3af" : "#64748b";
  const gridColor = isDark
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(0, 0, 0, 0.05)";
  const tooltipBg = isDark
    ? "rgba(17, 24, 39, 0.9)"
    : "rgba(255, 255, 255, 0.9)";
  const tooltipText = isDark ? "#fff" : "#1e293b";

  Chart.defaults.color = textColor;

  if (revenueChart) {
    revenueChart.options.scales.y.grid.color = gridColor;
    revenueChart.options.plugins.tooltip.backgroundColor = tooltipBg;
    revenueChart.options.plugins.tooltip.titleColor = tooltipText;
    revenueChart.options.plugins.tooltip.bodyColor = tooltipText;
    revenueChart.update();
  }

  if (categoryChart) {
    categoryChart.options.plugins.legend.labels.color = textColor;
    categoryChart.options.plugins.tooltip.backgroundColor = tooltipBg;
    categoryChart.options.plugins.tooltip.titleColor = tooltipText;
    categoryChart.options.plugins.tooltip.bodyColor = tooltipText;
    categoryChart.data.datasets[0].borderWidth = isDark ? 0 : 2;
    categoryChart.data.datasets[0].borderColor = isDark
      ? "transparent"
      : "#ffffff";
    categoryChart.update();
  }

  if (analyticsAcquisitionChart) {
    analyticsAcquisitionChart.options.scales.y.grid.color = gridColor;
    analyticsAcquisitionChart.options.plugins.tooltip.backgroundColor =
      tooltipBg;
    analyticsAcquisitionChart.options.plugins.tooltip.titleColor = tooltipText;
    analyticsAcquisitionChart.options.plugins.tooltip.bodyColor = tooltipText;
    analyticsAcquisitionChart.update();
  }

  if (analyticsFunnelChart) {
    analyticsFunnelChart.options.scales.r.grid.color = gridColor;
    analyticsFunnelChart.options.scales.r.angleLines.color = gridColor;
    analyticsFunnelChart.options.scales.r.pointLabels.color = textColor;
    analyticsFunnelChart.options.plugins.legend.labels.color = textColor;
    analyticsFunnelChart.options.plugins.tooltip.backgroundColor = tooltipBg;
    analyticsFunnelChart.options.plugins.tooltip.titleColor = tooltipText;
    analyticsFunnelChart.options.plugins.tooltip.bodyColor = tooltipText;
    analyticsFunnelChart.update();
  }
}

// --- 10. Bootstrap Applications on DOM Content Ready ---
window.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();

  const savedLang = safeGetItem("basafer_lang") || "en";
  setLanguage(savedLang);
});

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        arabic: ["Tajawal", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#a855f7",
          teal: "#14b8a6",
          dark: "#030712",
          light: "#f8fafc",
        },
      },
    },
  },
};
