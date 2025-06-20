import { Box, SimpleGrid } from '@chakra-ui/react';
// import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable';
import BlogTable from 'views/admin/default/components/BlogsTable';

import { columnsDataDevelopment } from 'views/admin/default/variables/columnsData';
import tableDataDevelopment from 'views/admin/default/variables/tableDataDevelopment.json';
export default function UserReports() {
  return (
    <>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: '20px', xl: '20px' }}
        >
          <BlogTable
            columnsData={columnsDataDevelopment}
            tableData={tableDataDevelopment}
          />
        </SimpleGrid>
      </Box>
    </>
  );
}
