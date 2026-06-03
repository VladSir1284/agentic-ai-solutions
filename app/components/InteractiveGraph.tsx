'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Shield, FileCheck, Eye, CheckCircle2 } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  icon: typeof Shield;
  description: string;
  detail: string;
  color: string;
}

export function InteractiveGraph() {
  const { t } = useLanguage();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes: Node[] = [
    {
      id: 'security',
      label: t('pillar_security'),
      icon: Shield,
      description: t('security_desc'),
      detail: t('security_detail'),
      color: '#8b5cf6',
    },
    {
      id: 'compliance',
      label: t('pillar_compliance'),
      icon: FileCheck,
      description: t('compliance_desc'),
      detail: t('compliance_detail'),
      color: '#a78bfa',
    },
    {
      id: 'auditability',
      label: t('pillar_auditability'),
      icon: Eye,
      description: t('auditability_desc'),
      detail: t('auditability_detail'),
      color: '#c4b5fd',
    },
    {
      id: 'reliability',
      label: t('pillar_reliability'),
      icon: CheckCircle2,
      description: t('reliability_desc'),
      detail: t('reliability_detail'),
      color: '#8b5cf6',
    },
  ];

  // Calculate positions
  const containerWidth = 1152;
  const leftX = 288; // center of left nodes (192px from left + 96px half width)
  const rightX = containerWidth - 288; // center of right nodes
  const startX = 68; // 32px + 40px (center of START)
  const endX = containerWidth - 68; // center of END
  const startY = 48; // 32px + 20px
  const nodeBaseY = 150; // 110px + 40px (center of node)
  const endY = 110 + nodes.length * 140 + 40; // center of END

  return (
    <div className="relative w-full max-w-6xl mx-auto py-20 px-4 bg-gradient-to-b from-white to-purple-50/30">
      {/* Graph Container */}
      <div className="relative" style={{ minHeight: '700px', width: '100%', maxWidth: '1152px', margin: '0 auto' }}>
        {/* SVG for all connections */}
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${containerWidth} 700`} preserveAspectRatio="xMidYMid meet" style={{ zIndex: 0 }}>
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
            </marker>
          </defs>

          {/* Start to Security (left) */}
          <path
            d={`M ${startX} ${startY} L ${leftX} ${nodeBaseY}`}
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />

          {/* Security (left) to Compliance (right) */}
          <path
            d={`M ${leftX} ${nodeBaseY} Q ${containerWidth / 2} ${nodeBaseY + 70} ${rightX} ${nodeBaseY + 140}`}
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />

          {/* Compliance (right) to Auditability (left) */}
          <path
            d={`M ${rightX} ${nodeBaseY + 140} Q ${containerWidth / 2} ${nodeBaseY + 210} ${leftX} ${nodeBaseY + 280}`}
            stroke="#a78bfa"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />

          {/* Auditability (left) to Reliability (right) */}
          <path
            d={`M ${leftX} ${nodeBaseY + 280} Q ${containerWidth / 2} ${nodeBaseY + 350} ${rightX} ${nodeBaseY + 420}`}
            stroke="#c4b5fd"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />

          {/* Reliability (right) to END (right) */}
          <path
            d={`M ${rightX} ${nodeBaseY + 420} L ${endX} ${endY}`}
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
        </svg>

        {/* Start Node */}
        <div className="absolute left-8 top-8">
          <div className="w-32 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg border-2 border-purple-600">
            <span className="text-white">START</span>
          </div>
        </div>

        {/* Nodes in Zigzag Pattern */}
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isLeft = index % 2 === 0;
          const isHovered = hoveredNode === node.id;

          return (
            <motion.div
              key={node.id}
              className={`absolute ${isLeft ? 'left-48' : 'right-48'}`}
              style={{ top: `${110 + index * 140}px` }}
              onHoverStart={() => setHoveredNode(node.id)}
              onHoverEnd={() => setHoveredNode(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Node */}
              <motion.div
                className="relative z-10 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div
                  className="w-48 p-6 rounded-2xl shadow-lg border-2 transition-all duration-300"
                  style={{
                    borderColor: node.color,
                    backgroundColor: isHovered ? `${node.color}10` : 'white',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${node.color}20` }}
                    >
                      <Icon size={20} style={{ color: node.color }} />
                    </div>
                    <h3 className="m-0 p-0">{node.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground m-0">{node.description}</p>
                </div>

                {/* Hover Detail Card */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className={`absolute top-0 ${isLeft ? 'left-full ml-8' : 'right-full mr-8'} w-80 p-6 rounded-2xl shadow-2xl border z-20 bg-white`}
                      style={{ borderColor: node.color }}
                      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: isLeft ? -20 : 20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="mb-3" style={{ color: node.color }}>
                        {node.label}
                      </h4>
                      <p className="text-sm leading-relaxed m-0">{node.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}

        {/* End Node */}
        <div className="absolute right-8" style={{ top: `${110 + nodes.length * 140}px` }}>
          <div className="w-32 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg border-2 border-green-600">
            <span className="text-white">END</span>
          </div>
        </div>
      </div>
    </div>
  );
}
