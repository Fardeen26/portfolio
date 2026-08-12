'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCardList from '@/app/projects/components/ProjectCardList';
import AddOnProjects from '@/components/AddOnProjects';
import MobileApps from '@/components/MobileApps';
import WebExtensionProjects from '@/components/WebExtensionProjects';
import CodexPluginProjects from '@/components/CodexPluginProjects';

const TabbedProjectList = () => {
    return (
        <div className="w-full">
            <Tabs defaultValue="web" className="w-full">
                <div className="flex justify-center mb-8 max-sm:mb-4 max-sm:px-2">
                    <TabsList className="grid w-full max-w-2xl grid-cols-1 gap-1 border bg-white bg-opacity-10 backdrop-blur-lg dark:border-white/10 max-sm:max-w-4xl sm:grid-cols-5">
                        <TabsTrigger value="web" className="text-xs sm:text-sm data-[state=active]:bg-white/20">Full Stack</TabsTrigger>
                        <TabsTrigger value="mobile" className="text-xs sm:text-sm data-[state=active]:bg-white/20">Apps</TabsTrigger>
                        <TabsTrigger value="adobe" className="text-xs sm:text-sm data-[state=active]:bg-white/20">Adobe Add-Ons</TabsTrigger>
                        <TabsTrigger value="extensions" className="text-xs sm:text-sm data-[state=active]:bg-white/20">Web Extensions</TabsTrigger>
                        <TabsTrigger value="codex-plugin" className="text-xs sm:text-sm data-[state=active]:bg-white/20">Codex Plugin</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="web" className="mt-0">
                    <ProjectCardList />
                </TabsContent>

                <TabsContent value="mobile" className="mt-0">
                    <MobileApps />
                </TabsContent>

                <TabsContent value="extensions" className="mt-0">
                    <WebExtensionProjects />
                </TabsContent>

                <TabsContent value="adobe" className="mt-0">
                    <AddOnProjects />
                </TabsContent>

                <TabsContent value="codex-plugin" className="mt-0">
                    <CodexPluginProjects />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default TabbedProjectList;
