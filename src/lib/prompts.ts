
import type { Prompt } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/seed/default/600/400';
const CREATOR_AVATAR = 'https://i.pravatar.cc/150?u=a042581f4e29026704d';

export const prompts: Prompt[] = [
  {
    id: '1',
    title: 'Ultra-Realistic Cinematic Portrait Generator',
    slug: 'ultra-realistic-cinematic-portrait-generator',
    description:
      'Generate an ultra-realistic 4K cinematic portrait of a young man, inspired by the reference image. Includes detailed styling, natural lighting, and modern architectural background.',
    tags: ['portrait', 'cinematic', 'realistic', '4k', 'photography', 'male'],
    category: 'Photography & Portraits',
    content: `
Ultra-realistic **4K cinematic portrait** of a young man with the **same face structure, complexion, and hairstyle** as the reference image provided.

📌 **Setting & Pose:**  
He is seated in an outdoor café with modern geometric architecture behind him. He leans slightly forward, both elbows resting lightly on the table, fingers interlocked. Chin slightly raised, eyes looking directly at the camera with calm confidence. Warm natural sunlight with soft highlights. Subtle depth of field and creamy bokeh background.

📌 **Clothing Style:**  
- **Shalwar Qameez:** Deep navy blue, smooth textured fabric with natural folds  
- **Waistcoat:** White base with elegant red floral embroidery (same pattern as reference)  
- **Footwear:** Dark blue Peshawari chappals  
- **Accessory:** Premium silver/grey wristwatch with a black dial

📌 **Mood & Visual Style:**  
Cinematic, elegant, high-detail facial features, clean skin texture, sharp eyes, warm color grading. Professional portrait photography style with realistic shadows and highlights.

🎯 **Output Requirement:**  
High-resolution 4K ultra-detailed portrait, HDR, photorealistic rendering.
`,
    coverImage: 'https://i.postimg.cc/g0wGZ60v/Whats-App-Image-2025-11-12-at-3-55-37-PM.jpg',
    seo: {
      metaTitle: 'Ultra-Realistic Cinematic Portrait Prompt | RealPrompt',
      metaDescription:
        'Use this professional AI prompt to generate stunning ultra-realistic cinematic portraits. Perfect for photography-style AI renders in 4K resolution.',
    },
    visible: true,
    createdAt: '2024-05-20T10:00:00Z',
    createdBy: {
      name: 'Prompt Creator',
      avatar: CREATOR_AVATAR,
    },
  },
  {
    id: '2',
    title: 'Cyberpunk Cityscape Creator',
    slug: 'cyberpunk-cityscape-creator',
    description: 'Generate immersive, neon-lit cyberpunk cityscapes with towering skyscrapers and flying vehicles. Inspired by classic sci-fi.',
    tags: ['cyberpunk', 'cityscape', 'sci-fi', 'neon'],
    category: 'Art & Design',
    content: 'Create a detailed concept art of a futuristic cyberpunk city at night. The scene should be filled with neon signs, holographic advertisements, and dense, towering architecture. Include flying cars and a moody, rain-slicked atmosphere. Aspect ratio 16:9.',
    coverImage: getImage('prompt-2-cover'),
    seo: {
      metaTitle: 'Cyberpunk Cityscape AI Prompt | RealPrompt',
      metaDescription: 'A detailed AI prompt for creating breathtaking, neon-drenched cyberpunk cityscapes.',
    },
    visible: true,
    createdAt: '2024-05-19T14:30:00Z',
    createdBy: { name: 'Creator', avatar: CREATOR_AVATAR },
  },
  {
    id: '3',
    title: 'Enchanted Forest Illustrator',
    slug: 'enchanted-forest-illustrator',
    description: 'Produce magical illustrations of enchanted forests, complete with glowing flora, mystical creatures, and ancient trees.',
    tags: ['fantasy', 'forest', 'illustration', 'magical'],
    category: 'Illustration',
    content: 'Illustrate an enchanted forest scene in a storybook style. The forest should be filled with bioluminescent mushrooms, ancient, wise-looking trees with moss, and a gentle stream. A small, friendly mystical creature should be visible in the foreground. The lighting should be soft and ethereal.',
    coverImage: getImage('prompt-3-cover'),
    seo: {
      metaTitle: 'Enchanted Forest Illustration Prompt | RealPrompt',
      metaDescription: 'Create magical, storybook-style illustrations of enchanted forests with this creative AI prompt.',
    },
    visible: true,
    createdAt: '2024-05-18T11:00:00Z',
    createdBy: { name: 'Creator', avatar: CREATOR_AVATAR },
  },
  {
    id: '4',
    title: 'Minimalist Logo Designer',
    slug: 'minimalist-logo-designer',
    description: 'Design clean, modern, and minimalist logos for brands and projects. Specify a concept and get multiple variations.',
    tags: ['logo', 'design', 'minimalist', 'branding'],
    category: 'Branding',
    content: 'Design a minimalist logo for a tech startup named "QuantumLeap". The logo should be abstract, geometric, and represent concepts of speed and innovation. Use a monochromatic color scheme. Provide 3-4 variations on a clean background.',
    coverImage: getImage('prompt-4-cover'),
    seo: {
      metaTitle: 'Minimalist Logo Design AI Prompt | RealPrompt',
      metaDescription: 'A powerful prompt for generating clean, modern, and minimalist logos for any brand.',
    },
    visible: true,
    createdAt: '2024-05-17T09:00:00Z',
    createdBy: { name: 'Creator', avatar: CREATOR_AVATAR },
  },
  {
    id: '5',
    title: 'Professional Marketing Copy',
    slug: 'professional-marketing-copy',
    description: 'Generate persuasive marketing copy for landing pages, ads, and social media posts using the AIDA framework.',
    tags: ['copywriting', 'marketing', 'business', 'AIDA'],
    category: 'Writing',
    content: 'Write marketing copy for a new productivity app called "Zenith". The app helps users focus and manage tasks. Use the AIDA (Attention, Interest, Desire, Action) framework. The target audience is busy professionals and students. The tone should be inspiring and empowering. Include a strong call to action.',
    coverImage: getImage('prompt-5-cover'),
    seo: {
      metaTitle: 'AIDA Marketing Copywriting Prompt | RealPrompt',
      metaDescription: 'Generate high-converting marketing copy for any product or service with this expert-level AI prompt.',
    },
    visible: true,
    createdAt: '2024-05-16T18:00:00Z',
    createdBy: { name: 'Creator', avatar: CREATOR_AVATAR },
  },
  {
    id: '6',
    title: 'Watercolor Animal Portraits',
    slug: 'watercolor-animal-portraits',
    description: 'Create beautiful and delicate watercolor portraits of any animal. Perfect for pet lovers and artists.',
    tags: ['watercolor', 'portrait', 'animal', 'art'],
    category: 'Art & Design',
    content: 'Create a delicate watercolor portrait of a red fox. The style should be loose and expressive, with soft edges and a limited color palette of oranges, browns, and whites. The background should be minimal, suggesting a natural setting without being detailed. Capture a curious and gentle expression.',
    coverImage: getImage('prompt-6-cover'),
    seo: {
      metaTitle: 'Watercolor Animal Portrait Prompt | RealPrompt',
      metaDescription: 'Use this AI prompt to generate delicate and beautiful watercolor portraits of your favorite animals.',
    },
    visible: true,
    createdAt: '2024-05-15T12:00:00Z',
    createdBy: { name: 'Creator', avatar: CREATOR_AVATAR },
  },
  {
    id: '7',
    title: '3D Game Character Modeler',
    slug: '3d-game-character-modeler',
    description: 'Generate stylized 3D character models for video games. Specify the style, clothing, and accessories.',
    tags: ['3d', 'character', 'game-dev', 'modeling'],
    category: '3D & Gaming',
    content: 'Generate a full-body 3D model of a stylized fantasy rogue character. The character should have a leather hood, dual daggers, and practical adventuring gear. The style should be similar to modern stylized games like Fortnite or Valorant. Provide a T-pose view for rigging.',
    coverImage: getImage('prompt-7-cover'),
    seo: {
      metaTitle: '3D Game Character Model Prompt | RealPrompt',
      metaDescription: 'Quickly create stylized 3D character models for your game development projects with this advanced AI prompt.',
    },
    visible: true,
    createdAt: '2024-05-14T16:45:00Z',
    createdBy: { name: 'Creator', avatar: CREATOR_AVATAR },
  },
  {
    id: '8',
    title: 'Gourmet Food Photography',
    slug: 'gourmet-food-photography',
    description: 'Create mouth-watering, professional-quality photos of gourmet dishes. Perfect for menus, blogs, and social media.',
    tags: ['food', 'photography', 'gourmet', 'styling'],
    category: 'Photography',
    content: 'Generate a high-end, professional photograph of a gourmet burger and fries. The lighting should be dramatic and appetizing, with a shallow depth of field. The background should be a rustic wooden table. Include a craft beer in the background. The style should be worthy of a food magazine cover.',
    coverImage: getImage('prompt-8-cover'),
    seo: {
      metaTitle: 'Gourmet Food Photography AI Prompt | RealPrompt',
      metaDescription: 'Produce stunning, professional food photography for your restaurant, blog, or social media using this AI prompt.',
    },
    visible: true,
    createdAt: '2024-05-13T10:20:00Z',
    createdBy: { name: 'Creator', avatar: CREATOR_AVATAR },
  },
  {
    id: '9',
    title: 'Surreal Landscape Generator',
    slug: 'surreal-landscape-generator',
    description: 'Create dreamlike and surreal landscapes that defy reality. Combine elements of nature and fantasy for unique art.',
    tags: ['surreal', 'landscape', 'fantasy', 'art'],
    category: 'Art & Design',
    content: 'Generate a surreal landscape painting in the style of Salvador Dalí. The scene should feature floating islands, melting clocks draped over giant mushrooms, and a sky with two moons. The color palette should be dreamlike and saturated.',
    coverImage: getImage('prompt-9-cover'),
    seo: {
      metaTitle: 'Surreal Landscape AI Art Prompt | RealPrompt',
      metaDescription: 'Create unique, dreamlike, and surreal landscapes with this powerful AI prompt for digital artists.',
    },
    visible: true,
    createdAt: '2024-05-12T20:00:00Z',
    createdBy: { name: 'Creator', avatar: CREATOR_AVATAR },
  },
  {
    id: '10',
    title: 'Product Mockup Creator',
    slug: 'product-mockup-creator',
    description: 'Instantly create realistic mockups for your digital or physical products, such as books, apps, and merchandise.',
    tags: ['mockup', 'product', 'design', 'presentation'],
    category: 'Branding',
    content: 'Create a realistic mockup of a hardcover book. The book cover design should feature a title "The Last Starlight" and an abstract, cosmic-themed artwork. Place the book on a clean, minimalist surface with soft, natural lighting. Show the book from a 3/4 angle.',
    coverImage: getImage('prompt-10-cover'),
    seo: {
      metaTitle: 'Product Mockup Creator AI Prompt | RealPrompt',
      metaDescription: 'Generate professional and realistic mockups for your products in seconds with this versatile AI prompt.',
    },
    visible: true,
    createdAt: '2024-05-11T13:15:00Z',
    createdBy: { name: 'Creator', avatar: CREATOR_AVATAR },
  },
  {
    id: '11',
    title: 'Hyper-Realistic Pakistani Wedding Portrait Generator',
    slug: 'hyper-realistic-pakistani-wedding-portrait-generator',
    description:
      'Create a hyper-realistic outdoor portrait of a young Pakistani man standing confidently outside a beautiful marriage marquee with elegant décor and traditional attire.',
    tags: ['portrait', 'pakistani', 'wedding', 'realistic', 'photography'],
    category: 'Photography & Portraits',
    content: `
A hyper-realistic medium outdoor portrait of a young Pakistani man standing confidently outside a *beautiful Pakistani marriage marquee*, with elegant wedding décor, soft fairy lights, and floral arrangements in the softly blurred background. The man stands slightly angled toward the camera, one hand resting near his waist and the other relaxed by his side — a graceful, confident pose that feels natural and refined.

He is dressed in a *light pistachio-green shalwar kameez* paired with a *charcoal grey waistcoat* featuring fine texture, polished buttons, rado chain type wristwatch and a tailored fit that enhances his elegant traditional look. The outfit is crisp and well-fitted, showing detailed stitching and clean lines.

Lighting is natural and slightly warm, highlighting his face and adding a soft glow to the scene. The camera is at eye level, framed from mid-thigh up, creating a balanced and composed visual.

Face remains completely real and unchanged; body shape, proportions, and fit stay exactly true to the original photo — slim or healthy as naturally seen. A soft, elegant “Malik Photography” signature appears subtly blended in the upper right corner.
  `,
    coverImage: 'https://i.postimg.cc/Mp787gMj/Generated-Image-November-16-2025-5-29PM.png',
    seo: {
      metaTitle: 'Hyper-Realistic Pakistani Wedding Portrait Prompt | RealPrompt',
      metaDescription:
        'Generate stunning hyper-realistic outdoor Pakistani wedding portraits with this detailed prompt. Perfect for AI photo creation, photography references, and cinematic visuals.',
    },
    visible: true,
    createdAt: '2025-01-01T10:00:00Z',
    createdBy: {
      name: 'Portrait Creator',
      avatar: CREATOR_AVATAR,
    },
  },
  {
    id: '12',
    title: 'Ultra-Realistic Royal Indoor Portrait Generator',
    slug: 'ultra-realistic-royal-indoor-portrait-generator',
    description:
      'Generate an ultra-realistic full-body royal indoor portrait of a young Pakistani man seated confidently on a luxurious royal chair with cinematic lighting and perfect realism.',
    tags: ['portrait', 'pakistani', 'royal', 'realistic', 'photography'],
    category: 'Photography & Portraits',
    content: `
A full-body **ultra-realistic royal indoor portrait** of a young man seated confidently on a luxurious *royal chair* featuring a **red velvet cushion**, **golden carved frame**, and elegant curves. The setting is rich with **ornate golden wall panels**, **decorative geometric patterns**, and a **marble-patterned floor** that enhances the luxurious environment.

The man is wearing a **black shalwar kameez** paired with a **black or golden waistcoat**, along with **brown loafers**. He sits with **one leg crossed**, maintaining a calm, confident posture while looking directly into the camera.

On both sides, there are **lush floral arrangements** with green leaves and colorful flowers, adding vibrance and depth. A **small golden side table** with a decorative flower vase is placed next to the chair, complementing the royal interior aesthetic.

Lighting is **cinematic**, **well-balanced**, and **8K ultra-sharp**, with perfect focus on the subject and soft highlights across the environment.

**Face must remain 100% identical** to the reference photo provided, with the **same body shape, fitness level, hairstyle, facial proportions**, and overall natural appearance — no changes, no enhancements, no reshaping.

Reference Image (Face must match 100%):  
https://i.postimg.cc/Wz4s18XM/Whats-App-Image-2025-11-14-at-9-31-59-PM.jpg

A subtle and clean “Malik Photography” signature should appear in the upper right corner.
  `,
    coverImage: 'https://i.postimg.cc/Wz4s18XM/Whats-App-Image-2025-11-14-at-9-31-59-PM.jpg',
    seo: {
      metaTitle: 'Ultra-Realistic Royal Indoor Portrait Prompt | RealPrompt',
      metaDescription:
        'Create stunning ultra-realistic full-body royal indoor portraits with cinematic lighting and perfect face accuracy. Ideal for AI photo generation and high-end visuals.',
    },
    visible: true,
    createdAt: '2025-01-01T10:00:00Z',
    createdBy: {
      name: 'Portrait Creator',
      avatar: CREATOR_AVATAR,
    },
  },
  {
    id: '13',
    title: 'Hyper-Realistic Indoor Café Portrait Generator',
    slug: 'hyper-realistic-indoor-cafe-portrait-generator',
    description:
      'Create a warm, hyper-realistic indoor café portrait with cinematic lighting, natural pose, and perfectly accurate facial details based on the reference photo.',
    tags: ['portrait', 'cafe', 'realistic', 'photography', 'indoor'],
    category: 'Photography & Portraits',
    content: `
A warm, **hyper-realistic indoor café portrait** set at a stylish reddish-brown wooden table. The man is seated in a relaxed, natural pose with his **right hand gently touching his forehead**, creating a candid and expressive moment.

He is wearing an **open black denim jacket** with a **white T-shirt** underneath. A **dark-green smartwatch** sits on his left wrist, matching the casual and modern aesthetic. Background features a **strong cinematic bokeh** with soft, warm, natural lighting coming from the café environment.

The framing is **medium close-up**, capturing the upper torso, hands, and facial expression clearly — realistic, detailed, and well-lit.

**Face must remain 100% identical** to the reference photo: same eyes, skin texture, expression, hairstyle, glasses (if present), beard styling, and all natural features exactly as they are.  
**Body shape must match exactly** — slim, normal, or healthy exactly as in the original reference image.


A subtle “**Malik Photography**” signature should appear softly blended inside the frame in the **top-left corner**, elegant and minimal.
  `,
    coverImage: 'https://i.postimg.cc/LXcGrVG1/Generated-Image-November-16-2025-5-54PM.png',
    seo: {
      metaTitle: 'Hyper-Realistic Indoor Café Portrait Prompt | RealPrompt',
      metaDescription:
        'Generate stunning warm indoor café portraits with realistic lighting, natural poses, and perfect face accuracy. Ideal for AI image creation and cinematic portrait photography.',
    },
    visible: true,
    createdAt: '2025-01-01T10:00:00Z',
    createdBy: {
      name: 'Portrait Creator',
      avatar: CREATOR_AVATAR,
    },
  },
  {
    id: '14',
    title: 'Hyper-Realistic Outdoor Café Portrait Generator',
    slug: 'hyper-realistic-outdoor-cafe-portrait-generator',
    description:
      'Create a stunning, hyper-realistic outdoor café portrait with natural lighting, detailed surroundings, and perfectly accurate facial features based on the reference photo.',
    tags: ['portrait', 'cafe', 'realistic', 'photography', 'outdoor', 'European', 'teen', 'fashion', 'high-resolution', 'cinematic'],
    category: 'Photography & Portraits',
    content: `
8K Ultra-realistic portrait of a stylish young 16-year-old boy sitting confidently at an outdoor café table beside a stone building. 
He is wearing a fitted **white shalwar kameez** with a **black or golden waistcoat**, and **black double monk strap shoes**. He has neatly styled short hair and a trimmed beard, sitting cross-legged on a black metal chair with a red cushion.

A small round table in front of him holds a glass bottle of water, a cup of coffee, and a saucer. Background includes a **green garden with red flowers**, blurred people, and warm beige architectural textures, styled like a **European street café**. Natural sunlight illuminates the scene with realistic shadows and reflections.

**Face must remain 100% identical** to the reference photo: same eyes, skin texture, expression, hairstyle, and beard.  
**Body shape must match exactly** — slim, normal, or healthy exactly as in the reference photo.

The overall vibe is elegant, modern, and cinematic. Hyper-realistic, sharp, detailed, and photorealistic. Include a subtle "**Malik Photography**" signature softly blended in the top-left corner.
  `,
    coverImage: 'https://i.postimg.cc/LXcGrVG1/Generated-Image-November-16-2025-5-54PM.png',
    seo: {
      metaTitle: 'Hyper-Realistic Outdoor Café Portrait Prompt | RealPrompt',
      metaDescription:
        'Generate stunning outdoor café portraits in 8K with realistic lighting, natural poses, and perfect face accuracy. Ideal for AI image creation and cinematic portrait photography.',
    },
    visible: true,
    createdAt: '2025-11-16T18:00:00Z',
    createdBy: {
      name: 'Portrait Creator',
      avatar: CREATOR_AVATAR,
    },
  },
  {
  id: '15',
  title: 'Modern Outdoor Staircase Portrait Generator',
  slug: 'modern-outdoor-staircase-portrait-generator',
  description:
    'Generate a hyper-realistic outdoor portrait of a young man on a modern staircase, featuring traditional attire and lush green surroundings, with perfect face and body accuracy.',
  tags: ['portrait', 'outdoor', 'staircase', 'fashion', 'realistic', 'photography', 'pakistani'],
  category: 'Photography & Portraits',

  content: `
A hyper-realistic, full-body portrait of a young man standing on a **modern outdoor staircase** with sleek **silver railings**.

📌 **Pose & Action:**
He is holding a pair of **sunglasses in his right hand**, his gaze directed downwards towards them, creating a candid and thoughtful moment.

📌 **Attire:**
- **Shalwar Qameez:** Elegant **black silk shalwar qameez**.
- **Waistcoat:** A stylish waistcoat with a **white or red floral pattern**.
- **Footwear:** Classic **black Peshawari chappals**.

📌 **Setting & Lighting:**
The background features **lush green foliage**, suggesting a serene outdoor park or garden setting. The lighting is **bright and natural**, highlighting the rich textures of his clothing and the clean lines of the staircase.

🎯 **Crucial Requirements:**
- **Face & Hair:** Must remain **100% unchanged** from the reference photo.
- **Body Fitness:** Must be **exactly the same** as seen in the reference photo.
- **Signature:** A subtle "**Malik Photography**" signature should be placed on the **upper left side** of the image.
  `,

  coverImage: 'https://i.postimg.cc/y6gkzY3Z/Whats-App-Image-2025-11-11-at-5-27-44-PM-(1).jpg',

  seo: {
    metaTitle: 'Modern Outdoor Staircase Portrait Prompt | RealPrompt',
    metaDescription:
      'Use this AI prompt to create a hyper-realistic portrait of a man in traditional attire on a modern staircase, ensuring perfect facial and body accuracy.',
  },

  visible: true,
  createdAt: '2025-11-16T19:00:00Z',

  createdBy: {
    name: 'Portrait Creator',
    avatar: CREATOR_AVATAR,
  },
 },
{
  id: '16',
  title: 'Cinematic Office Desk Portrait Generator – Executive Suit Edition',
  slug: 'cinematic-office-desk-portrait-executive-suit',
  description:
    'Generate a cinematic hyper-realistic office portrait with a premium executive suit, wooden desk, laptop lighting, and HDR shadows.',
  tags: ['portrait', 'office', 'cinematic', 'hdr', 'formal', 'executive'],
  category: 'Photography & Portraits',
  content: `
Ultra-realistic **cinematic office portrait** of a young man sitting at a polished wooden executive desk inside a premium corporate office.

🎥 **Camera Angle:** Mid-shot (chest to head), 35mm lens, soft depth of field.  
🎨 **Mood:** Vibrant but professional, HDR lighting, soft rim light on hair and shoulders.

👔 **Outfit:**  
- Premium charcoal grey **executive suit**  
- White crisp dress shirt  
- Deep navy tie  
- Silver classic watch  

💡 **Environment:**  
- MacBook open with gentle screen light  
- Warm overhead ceiling light  
- Glass wall behind with blurred city buildings  

**Face & body must remain 100% identical** to the reference photo.  
**Photorealistic quality: 8K, no distortions, no exaggeration.**

Subtle watermark: **"Malik Photography"** in the top-right corner.
  `,
  coverImage: 'https://i.postimg.cc/FskrTS9z/Whisk-293a7da9394b6d484a54d66993bdac58dr.png',
  seo: {
    metaTitle: 'Cinematic Office Portrait AI Prompt | RealPrompt',
    metaDescription:
      'Generate cinematic HDR office portraits with executive outfits and premium corporate styling using this detailed prompt.',
  },
  visible: true,
  createdAt: '2025-11-17T12:00:00Z',
  createdBy: { name: 'Prompt Master', avatar: CREATOR_AVATAR },
 },
{
  id: '17',
  title: 'Soft Light Indoor Café Portrait – Casual Hoodie Edition',
  slug: 'soft-light-cafe-portrait-hoodie',
  description:
    'Create a soft and warm indoor café portrait featuring a casual hoodie outfit and cinematic natural lighting.',
  tags: ['portrait', 'cafe', 'soft-light', 'hoodie', 'cinematic'],
  category: 'Photography & Portraits',
  content: `
A **soft natural light indoor café portrait** with warm tones.

🧥 **Outfit:** Light grey hoodie with realistic fabric texture  
📸 **Camera Angle:** Close-up portrait, 50mm lens, smooth bokeh  
☕ **Setting:** Warm wood textures, hanging lights, blurred people behind

Face remains **100% identical** to the reference image.  
Mood: Soft, cozy, warm, Instagram-aesthetic.  
Resolution: **8K ultra-detailed, hyper-realistic**.
  `,
  coverImage: 'https://i.postimg.cc/rpXND5w3/Whisk-8bb2d10e9906294815947b6984d0eae4dr.png',
  seo: {
    metaTitle: 'Soft Light Café Portrait Prompt | RealPrompt',
    metaDescription: 'Generate soft, cozy, and cinematic indoor café portraits with hoodie outfits.',
  },
  visible: true,
  createdAt: '2025-11-17T12:10:00Z',
  createdBy: { name: 'Prompt Master', avatar: CREATOR_AVATAR },
 },
];
