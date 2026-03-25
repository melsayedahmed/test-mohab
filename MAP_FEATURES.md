# Interactive Global Map - Feature Documentation

## Overview
A cinematic, cyber-security-themed interactive world map that tracks projects and students globally in real-time with smooth animations and layer transitions.

## Features Implemented

### 1. Three-State Layer Toggle
- **Projects Only**: Shows only countries with projects (green glow)
- **Students Only**: Shows only student location markers (cyan pulsing circles)
- **Both**: Displays both layers simultaneously

The toggle uses smooth fade transitions without reloading the map, maintaining position and zoom level.

### 2. Student Markers
- **Pulsing Animation**: Continuous pulse effect using sine wave calculations
- **Dynamic Size**: Marker size scales based on student count (8-20px range)
- **Glow Effect**: Multi-layer radial gradients for depth
- **Hover State**: Brightens on hover
- **Tooltip**: Shows location name and student count

### 3. Project Countries
- **Glowing Borders**: Animated border using sine wave for intensity
- **Radial Gradient**: Soft area glow around each location
- **Hover State**: Increases glow intensity and border thickness
- **Tooltip**: Shows country name and project count

### 4. Control Panel (Top-Left)
- **System Status**: "System Active" indicator with pulsing dot
- **Statistics**: Real-time totals for projects and students
- **Layer Toggle**: Three-button toggle system
- **Legend**: Visual guide showing layer colors
- **Scanning Effect**: Animated scan line across the panel

### 5. Cinematic Background
- **Dark Theme**: Gradient from gray-950 to black
- **Animated Grid**: Moving grid overlay (40px cells)
- **Gradient Overlay**: Subtle cyan/green gradient layer
- **Professional Feel**: Cyber security dashboard aesthetic

### 6. Performance Optimizations
- **Single Canvas**: Uses one canvas element for all rendering
- **Layer Visibility**: Switches layers without destroying/recreating
- **RequestAnimationFrame**: Smooth 60fps animations
- **Efficient Rendering**: Only draws visible layers

### 7. Interactive Features
- **Hover Detection**: Mouse tracking for tooltips
- **Smooth Transitions**: 0.5s fade when switching layers
- **Live Status**: Bottom indicator showing "Live Tracking Enabled"
- **Responsive**: Adapts to window resize

## Technical Architecture

### File Structure
```
src/
├── components/
│   └── GlobalMap.tsx        # Main map component
└── data/
    └── mapData.ts           # Projects and students data
```

### Data Format

**Projects:**
```typescript
{
  country: string;
  projects: number;
}
```

**Students:**
```typescript
{
  name: string;
  lat: number;
  lng: number;
  students: number;
}
```

## Usage

Navigate to `/map` route to view the interactive map.

### Controls
1. **Layer Toggle**: Click Projects/Students/Both buttons
2. **Hover**: Move mouse over markers or countries for details
3. **View**: Map maintains position during layer switches

## Visual Design

### Color Scheme
- **Projects**: Green (#22c55e) with glow effects
- **Students**: Cyan (#06b6d4) with pulse animations
- **Background**: Dark gray/black gradient
- **Accents**: Cyan and green borders/highlights

### Animations
- Grid movement: 20 units per time step
- Pulse effect: 3x time multiplier for faster animation
- Glow intensity: Sine wave oscillation
- Scan line: 3-second linear loop

### Effects
- Radial gradients for depth
- Multiple glow layers
- Pulsing animations
- Hover state transitions
- Border animations

## Performance Notes

- Canvas rendering is optimized for smooth 60fps
- Only active layers are drawn each frame
- Hover detection uses efficient distance calculations
- No DOM manipulation during animations
- Single animation loop for all effects

## Future Enhancements

Potential additions:
- Zoom and pan controls
- Filter by region
- Time-based data animation
- Click events for detailed views
- Data export functionality
- Real-time data updates via API

## Browser Compatibility

Tested and optimized for:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

Requires:
- Canvas 2D API support
- ES6+ JavaScript features
- CSS3 animations

---

**Access the map at:** `/map` route
**Built with:** React, TypeScript, Canvas API, Tailwind CSS
