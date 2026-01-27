"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Folder, FileCode, Star, ExternalLink, Github, Terminal, X, Minimize2, Maximize2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tags: string[];
  stars: number;
  live?: string;
  github: string;
  gradient: string;
}

interface IdeViewerProps {
  projects: Project[];
}

export const IdeViewer = ({ projects }: IdeViewerProps) => {
  const [activeProject, setActiveProject] = useState<number>(0);

  return (
    <div className="w-full max-w-5xl mx-auto font-mono text-sm shadow-2xl rounded-lg overflow-hidden border border-baltic-blue-800 bg-[#0d1117]">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-baltic-blue-800">
        <div className="flex items-center gap-2">
           <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-3 text-xs text-baltic-blue-300">vibebros-workspace — -bash</span>
        </div>
        <div className="flex text-baltic-blue-400 gap-2">
            <Minimize2 className="w-3 h-3" />
            <Maximize2 className="w-3 h-3" />
            <X className="w-3 h-3" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[540px]">
        {/* Sidebar / Explorer */}
        <div className="w-full md:w-64 bg-[#0d1117] border-r border-baltic-blue-800 flex flex-col">
          <div className="p-2 text-xs font-bold text-baltic-blue-300 uppercase tracking-wider flex items-center gap-1">
            <span className="text-baltic-blue-500">▼</span> Explorer
          </div>
          <div className="px-2 pb-2">
            <div className="flex items-center gap-1.5 px-2 py-1 text-baltic-blue-200">
              <Folder className="w-4 h-4 text-cerulean-500" fill="currentColor" fillOpacity={0.2} />
              <span className="font-bold">projects</span>
            </div>
            <div className="ml-3 border-l border-baltic-blue-800 pl-1 mt-1 space-y-0.5">
              {projects.map((project, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs transition-colors text-left",
                    activeProject === idx
                      ? "bg-cerulean-500/20 text-cerulean-300"
                      : "text-baltic-blue-400 hover:text-baltic-blue-200 hover:bg-baltic-blue-800/30"
                  )}
                >
                  <FileCode className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{project.title.toLowerCase().replace(/\s+/g, '-')}.tsx</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col bg-[#0d1117] relative">
          
          {/* Tabs */}
          <div className="flex bg-[#0d1117] overflow-x-auto scrollbar-hide">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProject(idx)}
                className={cn(
                  "px-4 py-2 text-xs border-r border-baltic-blue-800 flex items-center gap-2 min-w-fit transition-colors",
                  activeProject === idx
                    ? "bg-[#0d1117] text-cerulean-300 border-t-2 border-t-cerulean-500"
                    : "bg-[#161b22] text-baltic-blue-500 border-t-2 border-t-transparent hover:bg-[#0d1117]"
                )}
              >
                <FileCode className="w-3 h-3" />
                {project.title.toLowerCase().replace(/\s+/g, '-')}.tsx
                {activeProject === idx && <X className="w-3 h-3 ml-1 hover:text-red-400" />}
              </button>
            ))}
          </div>

          {/* Code Content */}
          <div className="flex-1 p-6 overflow-y-auto font-mono relative">
            {/* Background Grid for Editor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="max-w-3xl"
              >
                <div className="flex flex-col gap-6">
                  {/* Header/Comments */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-baltic-blue-500">
                      <span>/**</span>
                    </div>
                    <div className="flex items-center gap-2 text-baltic-blue-500 pl-4">
                      <span>*</span>
                      <h2 className="text-xl font-bold text-cerulean-300">
                         {projects[activeProject].title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 text-baltic-blue-500 pl-4">
                      <span>*</span>
                      <p className="text-baltic-blue-400">
                        {projects[activeProject].description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-baltic-blue-500 pl-4">
                      <span>*</span>
                      <div className="flex items-center gap-2">
                         <span className="text-yale-blue-400">@stars</span>
                         <span className="text-orange-400">{projects[activeProject].stars}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-baltic-blue-500">
                      <span>*/</span>
                    </div>
                  </div>

                  {/* Component Definition */}
                  <div className="space-y-2">
                     <div className="flex items-center gap-2">
                        <span className="text-purple-400">export</span>
                        <span className="text-purple-400">default</span>
                        <span className="text-red-400">function</span>
                        <span className="text-yellow-300">{projects[activeProject].title.replace(/\s+/g, '')}</span>
                        <span className="text-baltic-blue-300">()</span>
                        <span className="text-baltic-blue-300">{"{"}</span>
                     </div>
                     
                     <div className="pl-6 space-y-4">
                        <div className="flex items-center gap-2">
                           <span className="text-purple-400">return</span>
                           <span className="text-baltic-blue-300">(</span>
                        </div>

                        {/* Visual Preview / Content inside code */}
                        <div className="pl-6 py-4 border border-baltic-blue-800/50 rounded-md bg-baltic-blue-900/20 backdrop-blur-sm relative overflow-hidden group">
                           {/* Gradient Background */}
                           <div className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject].gradient} opacity-10`} />
                           
                           <div className="relative z-10 p-4">
                              <div className="flex flex-wrap gap-2 mb-4">
                                 {projects[activeProject].tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 text-xs border border-cerulean-500/30 rounded text-cerulean-300 bg-cerulean-500/10">
                                       "{tag}"
                                    </span>
                                 ))}
                              </div>
                              
                              <div className="flex gap-4 mt-2">
                                 {projects[activeProject].live && (
                                    <a
                                       href={projects[activeProject].live}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-cerulean-600 text-white text-xs hover:bg-cerulean-500 transition-colors"
                                    >
                                       <ExternalLink className="w-3 h-3" />
                                       <span>Live_Demo</span>
                                    </a>
                                 )}
                                 <a
                                    href={projects[activeProject].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-baltic-blue-800 text-baltic-blue-200 text-xs hover:bg-baltic-blue-700 transition-colors"
                                 >
                                    <Github className="w-3 h-3" />
                                    <span>Source_Code</span>
                                 </a>
                              </div>
                           </div>
                        </div>

                        <div className="flex items-center gap-2">
                           <span className="text-baltic-blue-300">);</span>
                        </div>
                     </div>
                     <div className="text-baltic-blue-300">{"}"}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Status Bar */}
          <div className="h-6 bg-[#007acc] text-white text-[10px] flex items-center px-2 gap-4">
             <div className="flex items-center gap-1">
                <Terminal className="w-3 h-3" />
                <span>READY</span>
             </div>
             <div className="flex items-center gap-1">
                <span>master*</span>
             </div>
             <div className="flex-1" />
             <div className="flex items-center gap-1">
                <span>Ln 12, Col 45</span>
             </div>
             <div className="flex items-center gap-1">
                <span>UTF-8</span>
             </div>
             <div className="flex items-center gap-1">
                <span>TypeScript React</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
