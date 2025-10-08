'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCardList from '@/app/projects/components/ProjectCardList';
import AddOnProjects from '@/components/AddOnProjects';
import MobileApps from '@/components/MobileApps';

const TabbedProjectList = () => {
    return (
        <div className="w-full">
            <Tabs defaultValue="web" className="w-full">
                <div className="flex justify-center mb-8 max-sm:mb-4 max-sm:px-2">
                    <TabsList className="w-full max-w-xl max-sm:max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg border dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-1">
                        <TabsTrigger value="web" className="text-xs sm:text-sm data-[state=active]:bg-white/20">Full Stack</TabsTrigger>
                        <TabsTrigger value="adobe" className="text-xs sm:text-sm data-[state=active]:bg-white/20">Adobe Express Add-Ons</TabsTrigger>
                        <TabsTrigger value="mobile" className="text-xs sm:text-sm data-[state=active]:bg-white/20">Mobile Apps</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="web" className="mt-0">
                    <ProjectCardList />
                </TabsContent>

                <TabsContent value="mobile" className="mt-0">
                    <MobileApps />
                </TabsContent>

                <TabsContent value="adobe" className="mt-0">
                    <AddOnProjects />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default TabbedProjectList;
