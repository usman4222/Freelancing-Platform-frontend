import { useState, useEffect } from "react";
import { Search, Pencil, Trash2, MapPin, Grid, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { URLS } from "@/config/config";
import { Link } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
// Dummy data
const initialProjects = [
  {
    id: 1,
    title: "Frontend",
    proposals: 0,
    category: "Design & Creative",
    location: "Pakistan",
    postedAt: new Date(),
    costMin: 1220,
    costMax: 1800,
    rateType: "Hourly rate",
    status: "Pending",
    isPublic: true,
  },
  {
    id: 2,
    title: "Backend Development",
    proposals: 3,
    category: "Web Development",
    location: "United States",
    postedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    costMin: 2500,
    costMax: 5000,
    rateType: "Fixed price",
    status: "Active",
    isPublic: true,
  },
  {
    id: 3,
    title: "PHP development",
    proposals: 3,
    category: "Web Development",
    location: "Canada",
    postedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    costMin: 500,
    costMax: 1000,
    rateType: "Fixed price",
    status: "Active",
    isPublic: false,
  },
];

function ServicesAndProject({ type, project, onSave, onCancel }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState(initialProjects);
  const [formData, setFormData] = useState(project);

  const togglePublicStatus = (id) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id
          ? { ...project, isPublic: !project.isPublic }
          : project
      )
    );
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setFormData(project);
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="container mx-auto py-10 px-10 bg-[#F0EFEC] h-[100vh]">
      <h1 className="text-3xl font-semibold mb-8">Manage {type}</h1>

      <Card className="p-6">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Title</TableHead>
                <TableHead>Cost/Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Visibility</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <div className="space-y-1 w-[27rem]">
                      <div className="font-medium">{project.title}</div>
                      <div className="flex gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <span>
                            <Grid className="h-4 w-4" />
                          </span>
                          {project.category}
                        </div>
                        <div className="flex items-center gap-1">
                          <span>
                            <MapPin className="h-4 w-4" />
                          </span>
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <span>
                            <Calendar className="h-4 w-4" />
                          </span>
                          Posted {new Date(project.postedAt).toDateString()}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">
                      ${project.costMin.toLocaleString()} - $
                      {project.costMax.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project.rateType}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        project.status === "Pending" ? "warning" : "success"
                      }
                      className="rounded-full"
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={project.isPublic}
                          onChange={() => togglePublicStatus(project.id)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900">
                          {project.isPublic ? "Public" : "Private"}
                        </span>
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="default"
                        className="bg-emerald-500 hover:bg-emerald-600"
                      >
                        <Link
                          // to={URLS.FREELANCER.MANAGE_GIGS.MANAGE_GIG_PREVIEW}
                          to={URLS.CLIENT.PROPOSALS}
                        >
                          View
                        </Link>
                      </Button>
                      <Button variant="outline">
                        <Link to={URLS.FREELANCER.MANAGE_GIGS.MANAGE_GIGS_EDIT}>
                          <Pencil />
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-10 text-muted-foreground">
            You don't have any {type} yet
          </div>
        )}
      </Card>
    </div>
  );
}

export default ServicesAndProject;
