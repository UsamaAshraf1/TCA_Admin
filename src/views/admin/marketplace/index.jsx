import { Box, SimpleGrid } from '@chakra-ui/react';
// import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable';
import PodcastTable from 'views/admin/marketplace/components/PodcastTable';

import { columnsDataDevelopment } from 'views/admin/marketplace/variables/columnsData';
import tableDataDevelopment from 'views/admin/marketplace/variables/tableDataDevelopment.json';
export default function MartketPlace() {
  return (
    <>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: '20px', xl: '20px' }}
        >
          <PodcastTable
            columnsData={columnsDataDevelopment}
            tableData={tableDataDevelopment}
          />
        </SimpleGrid>
      </Box>
    </>
  );
}
