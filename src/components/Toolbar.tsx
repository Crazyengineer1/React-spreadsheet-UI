import {
  EyeOff,
  ArrowDownUp,
  Filter,
  LayoutGrid,
  Download,
  Upload,
  Share2,
  ChevronRight,
} from 'lucide-react';

const Toolbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-2 border-b bg-white">
      <div className="flex items-center gap-4 text-sm text-gray-700">
        <div className="flex items-center font-medium">
          Tool bar <ChevronRight className="w-4 h-4 ml-1" />
        </div>

        <div className="h-5 border-l border-gray-300 mx-2" />

        <div className="flex items-center gap-3">
          <button
            onClick={() => console.log('Hide fields')}
            className="flex items-center gap-1 hover:cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
          >
            <EyeOff className="w-4 h-4" />
            Hide fields
          </button>
          <button
            onClick={() => console.log('Sort')}
            className="flex items-center gap-1 hover:cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
          >
            <ArrowDownUp className="w-4 h-4" />
            Sort
          </button>
          <button
            onClick={() => console.log('Filter')}
            className="flex items-center gap-1 hover:cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button
            onClick={() => console.log('Cell view')}
            className="flex items-center gap-1 hover:cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
          >
            <LayoutGrid className="w-4 h-4" />
            Cell view
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <button
          onClick={() => console.log('Import')}
          className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded hover:cursor-pointer hover:bg-gray-100 hover:shadow-[0px_2px_4px_rgba(0,200,0,0.5)]"
        >
          <Download className="w-4 h-4" />
          Import
        </button>
        <button
          onClick={() => console.log('Export')}
          className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded hover:cursor-pointer hover:bg-gray-100 hover:shadow-[0px_2px_4px_rgba(0,200,0,0.5)]"
        >
          <Upload className="w-4 h-4" />
          Export
        </button>
        <button
          onClick={() => console.log('Share')}
          className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded hover:cursor-pointer hover:bg-gray-100 hover:shadow-[0px_2px_4px_rgba(0,200,0,0.5)]"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
        <button
          onClick={() => console.log('New Action')}
          className="flex items-center gap-1 bg-green-700 text-white px-4 py-1 rounded transition-all duration-500 hover:cursor-pointer hover:bg-gray-100 hover:text-green-700"
        >
          <Download className="w-4 h-4" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
