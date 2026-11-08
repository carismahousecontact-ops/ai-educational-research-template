import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { RotateCcw, X, Compass, Move, Sparkles } from 'lucide-react';

interface ZeroGravityProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

interface FloatingNode {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  color: string;
}

export const ZeroGravityPlayground: React.FC<ZeroGravityProps> = ({
  lang,
  isOpen,
  onClose
}) => {
  const isAr = lang === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);
  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const initialNodes: FloatingNode[] = [
    {
      id: 'node-1',
      name: 'Education Agent Skills',
      nameAr: 'مهارات وكلاء التعليم الـ 165',
      category: 'Build Tool',
      categoryAr: 'أداة مفتوحة المصدر',
      x: 80,
      y: 90,
      vx: 0.8,
      vy: 0.5,
      mass: 1.4,
      color: '#3b82f6'
    },
    {
      id: 'node-2',
      name: 'Hippo Memory Engine',
      nameAr: 'منصة هيبو للاسترجاع',
      category: 'Memory Science',
      categoryAr: 'علوم الذاكرة',
      x: 310,
      y: 70,
      vx: -0.6,
      vy: 0.7,
      mass: 1.1,
      color: '#10b981'
    },
    {
      id: 'node-3',
      name: 'Global Impact Diploma',
      nameAr: 'دبلوم الأثر العالمي',
      category: 'Design System',
      categoryAr: 'نظام كفاءات',
      x: 520,
      y: 140,
      vx: 0.5,
      vy: -0.6,
      mass: 1.3,
      color: '#a855f7'
    },
    {
      id: 'node-4',
      name: 'Shape of Knowledge',
      nameAr: 'رسم شكل المعرفة',
      category: 'Ontology Graph',
      categoryAr: 'رسم بياني معرفي',
      x: 160,
      y: 260,
      vx: -0.4,
      vy: -0.5,
      mass: 1.2,
      color: '#ec4899'
    },
    {
      id: 'node-5',
      name: 'UNESCO Blue Dot',
      nameAr: 'محرر اليونسكو العدد 13',
      category: 'Policy Panel',
      categoryAr: 'جلسة دولية',
      x: 420,
      y: 270,
      vx: 0.7,
      vy: 0.4,
      mass: 1.0,
      color: '#f59e0b'
    },
    {
      id: 'node-6',
      name: '27 Countries Fieldwork',
      nameAr: 'مسار 27 دولة (2003-2026)',
      category: 'The Journey',
      categoryAr: 'المسار الميداني',
      x: 600,
      y: 220,
      vx: -0.5,
      vy: -0.4,
      mass: 1.15,
      color: '#6366f1'
    }
  ];

  const [nodes, setNodes] = useState<FloatingNode[]>(initialNodes);

  useEffect(() => {
    if (!isOpen) return;

    let animId: number;
    const updatePhysics = () => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          if (node.id === draggedNodeId) return node;

          const boundsWidth = containerRef.current?.clientWidth || 750;
          const boundsHeight = containerRef.current?.clientHeight || 450;
          const nodeWidth = 190;
          const nodeHeight = 75;

          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newVx = node.vx;
          let newVy = node.vy;

          if (newX <= 15) {
            newX = 15;
            newVx = Math.abs(newVx) * 0.9;
          } else if (newX + nodeWidth >= boundsWidth - 15) {
            newX = boundsWidth - nodeWidth - 15;
            newVx = -Math.abs(newVx) * 0.9;
          }

          if (newY <= 15) {
            newY = 15;
            newVy = Math.abs(newVy) * 0.9;
          } else if (newY + nodeHeight >= boundsHeight - 15) {
            newY = boundsHeight - nodeHeight - 15;
            newVy = -Math.abs(newVy) * 0.9;
          }

          newVx += (Math.random() - 0.5) * 0.04;
          newVy += (Math.random() - 0.5) * 0.04;

          const speed = Math.hypot(newVx, newVy);
          if (speed > 2.2) {
            newVx = (newVx / speed) * 2.2;
            newVy = (newVy / speed) * 2.2;
          }

          return {
            ...node,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, [isOpen, draggedNodeId]);

  const handleMouseDown = (node: FloatingNode, e: React.MouseEvent) => {
    setDraggedNodeId(node.id);
    dragOffset.current = {
      x: e.clientX - node.x,
      y: e.clientY - node.y
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedNodeId || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const targetX = e.clientX - rect.left - 90;
    const targetY = e.clientY - rect.top - 35;

    setNodes((prev) =>
      prev.map((n) =>
        n.id === draggedNodeId
          ? {
              ...n,
              x: Math.max(10, Math.min(rect.width - 200, targetX)),
              y: Math.max(10, Math.min(rect.height - 85, targetY)),
              vx: (e.movementX || 0) * 0.3,
              vy: (e.movementY || 0) * 0.3
            }
          : n
      )
    );
  };

  const handleMouseUp = () => {
    setDraggedNodeId(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      <div className="relative max-w-4xl w-full bg-[#0c0e14] rounded-[2.5rem] border border-white/15 shadow-2xl overflow-hidden flex flex-col chromatic-border">
        {/* Antigravity Header */}
        <div className="px-6 py-4 bg-[#11131c] border-b border-white/8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 via-rose-500 to-amber-400 p-[1px] shadow-[0_0_12px_rgba(59,130,246,0.8)]">
              <div className="w-full h-full rounded-full bg-[#08090b]" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                {isAr ? 'مختبر انعدام الجاذبية: منظومة النظم المعرفية' : 'Antigravity Zero-G Simulation: Cognitive Systems'}
              </h3>
              <p className="text-xs text-white/50 font-mono">
                {isAr ? 'اسحب والفظ كتل المعرفة التعليمية بحرية في الفضاء الفيزيائي' : 'Interactive orbital physics of educational and cognitive architecture nodes'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setNodes(initialNodes)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-white/70 hover:text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isAr ? 'إعادة الضبط' : 'Reset Physics'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Floating Canvas Field */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative w-full h-[480px] bg-[#08090b] overflow-hidden cursor-grab active:cursor-grabbing"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        >
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <span className="font-display text-8xl font-black tracking-tighter text-white">
              ANTIGRAVITY
            </span>
          </div>

          {/* Interactive Floating Nodes */}
          {nodes.map((node) => {
            const isDragging = node.id === draggedNodeId;
            return (
              <div
                key={node.id}
                onMouseDown={(e) => handleMouseDown(node, e)}
                style={{
                  transform: `translate3d(${node.x}px, ${node.y}px, 0)`,
                  transition: isDragging ? 'none' : 'box-shadow 0.2s ease'
                }}
                className={`absolute top-0 left-0 w-[200px] p-3.5 rounded-2xl border bg-[#121520] shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing select-none ${
                  isDragging
                    ? 'shadow-[0_0_30px_rgba(59,130,246,0.4)] scale-105 border-blue-400 ring-2 ring-blue-500/40 z-30'
                    : 'border-white/12 hover:border-white/30 z-20'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-1">
                  <span className="truncate">{isAr ? node.categoryAr : node.category}</span>
                  <Move className="w-3 h-3 text-white/30" />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: node.color }}
                  />
                  <p className="font-display text-xs font-bold text-white truncate">
                    {isAr ? node.nameAr : node.name}
                  </p>
                </div>
                <div className="mt-2.5 pt-1.5 border-t border-white/8 flex items-center justify-between text-[9px] font-mono text-white/40">
                  <span>mass: {node.mass}g</span>
                  <span className="text-blue-400">0-G active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#0c0e14] border-t border-white/8 flex items-center justify-between text-xs text-white/50 font-mono">
          <span>Google Antigravity Physical Simulation · Cognitive Learning Architecture Graph</span>
          <span className="text-blue-400">Zero-G Engine Active</span>
        </div>
      </div>
    </div>
  );
};
